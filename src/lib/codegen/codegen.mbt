///|
pub fn codegen_lex(
  lex : Lex,
  code_unit~ : @type.CodeUnit,
  default_encoding~ : @type.Encoding?
) -> String {
  [
    lex.header,
    lex.rules.map(fn(rule) { codegen_rule(rule, code_unit~, default_encoding~) })
    |> @string.concat(separator="\n"),
    lex.trailer,
  ]
  |> @string.concat(separator="\n\n")
}

///|
fn rewrite_codeblock(
  codeblock : @type.CodeBlock,
  subst : Array[@codeblock_parser.SubstItem]
) -> @type.CodeBlock {
  let buf = StringBuilder::new()
  let mut last_index = 0
  for item in subst {
    // replace `$startpos(t)`/`$endpos(t)` with `_start_pos_of_t`/`_end_pos_of_t`
    buf.write_substring(codeblock, last_index, item.start - last_index)
    match item.desc {
      StartPosOf(name) => buf.write_string("_start_pos_of_\{name}")
      EndPosOf(name) => buf.write_string("_end_pos_of_\{name}")
    }
    last_index = item.end
  }
  if last_index < codeblock.length() {
    buf.write_substring(codeblock, last_index, codeblock.length() - last_index)
  }
  buf.to_string()
}

///|
fn group_trans(
  trans : Array[(@eof_char_set.T, Int)]
) -> Array[((Int, Int), Int)] {
  let char_set_by_state = {}
  for tran in trans {
    let (char_set, next_state) = tran
    match char_set_by_state[next_state] {
      None => char_set_by_state[next_state] = char_set
      Some(existing_char_set) =>
        char_set_by_state[next_state] = char_set.union(existing_char_set)
    }
  }
  let result = char_set_by_state
    .iter()
    .flat_map(fn {
      (state, char_set) =>
        char_set
        .iter_ranges()
        .map(fn {
          (min, max) =>
            (
              (
                match min.repr() {
                  Eof => -1
                  Char(c) => c.to_int()
                },
                match max.repr() {
                  Eof => -1
                  Char(c) => c.to_int()
                },
              ),
              state,
            )
        })
    })
    .to_array()
  result.sort()
  result
}

///|
fn codegen_rule(
  rule : Rule,
  code_unit~ : @type.CodeUnit,
  default_encoding~ : @type.Encoding?
) -> String {
  let out = StringBuilder::new()
  let encoding = match code_unit {
    CodeUnit1 => default_encoding
    CodeUnit2 | CodeUnit4 => None
  }
  let dfa = @automaton.DFA::from_rule(rule, encoding~)
  out.write_string(
    $|fn \{rule.signature} {
    $|  let mut matched = None
    $|  let mut state = 0
    $|
    ,
  )
  let all_tag_actions = @sorted_set.new()
  for _, tag_action in dfa.tag_actions {
    all_tag_actions.add(tag_action)
  }
  let all_tag_vars = @sorted_set.new()
  for tag_action in all_tag_actions {
    for op in tag_action._ {
      match op {
        Set(dest~) => all_tag_vars.add(dest)
        Copy(dest~, src~) => {
          all_tag_vars.add(dest)
          all_tag_vars.add(src)
        }
      }
    }
  }
  fn gen_tag_var(tag_id : Int, rank : Int) -> String {
    if rank == 0 {
      "_tag_\{tag_id}"
    } else {
      "_tag_\{tag_id}_\{rank}"
    }
  }

  for tag_var in all_tag_vars {
    out.write_string(
      $|  let mut \{gen_tag_var(tag_var.0, tag_var.1)} = -1
      $|
      ,
    )
  }
  let start_tags = @sorted_set.new()
  for tag in start_tags {
    out.write_string(
      $|  \{gen_tag_var(tag, 0)} = lexbuf.curr_pos()
      $|
      ,
    )
  }
  out.write_string(
    $|  while true {
    $|    match state {
    $|
    ,
  )
  for state_num, trans in dfa.graph {
    out.write_string(
      $|      \{state_num} => {
      $|
      ,
    )
    fn gen_inline_tag_action(tag_action : @automaton.TagAction) -> String? {
      let buf = []
      for op in tag_action._ {
        match op {
          Set(dest~) =>
            buf.push("\{gen_tag_var(dest.0, dest.1)} = lexbuf.curr_pos()")
          Copy(dest~, src~) =>
            buf.push(
              "\{gen_tag_var(dest.0, dest.1)} = \{gen_tag_var(src.0, src.1)}",
            )
        }
      }
      if buf.is_empty() {
        None
      } else {
        Some(buf.iter().map(fn { x => "        \{x}" }).join("\n"))
      }
    }

    if gen_inline_tag_action(dfa.tag_actions[state_num].unwrap())
      is Some(tag_action_code) {
      out.write_string("\{tag_action_code}\n")
    }
    if dfa.end_nodes[state_num] is Some((pattern_id, captures)) {
      out.write_string(
        $|        if matched is (None | Some((\{pattern_id}..<_, _, _))) {
        $|          matched = Some((\{pattern_id}, lexbuf.curr_pos(), [
        ,
      )
      let mut is_first = true
      for capture in captures {
        let ((begin_tag, begin_rank), (end_tag, end_rank)) = capture
        let begin_tag_var = gen_tag_var(begin_tag, begin_rank)
        let end_tag_var = gen_tag_var(end_tag, end_rank)
        if not(is_first) {
          out.write_string(", ")
        }
        out.write_string("(\{begin_tag_var}, \{end_tag_var})")
        is_first = false
      }
      out.write_string("]))\n")
      out.write_string(
        $|        }
        $|
        ,
      )
    }
    let grouped_trans = group_trans(trans)
    if grouped_trans.is_empty() {
      out.write_string(
        $|        break
        $|
        ,
      )
    } else {
      out.write_string(
        $|        state = match lexbuf.next_as_int() {
        $|
        ,
      )
      for tran in grouped_trans {
        let ((first_char, last_char), next_state) = tran
        let pattern = if first_char == last_char {
          "\{first_char}"
        } else {
          "\{first_char}..=\{last_char}"
        }
        out.write_string(
          $|          \{pattern} => \{next_state}
          $|
          ,
        )
      }
      out.write_string(
        $|          _ => break
        $|        }
        $|
        ,
      )
    }
    out.write_string(
      $|      }
      $|
      ,
    )
  }
  out.write_string(
    $|      _ => panic()
    $|    }
    $|  }
    $|
    ,
  )
  out.write_string(
    $|
    $|  guard matched is Some((pattern_id, marked_pos, _captures)) else {
    $|    // No pattern matched
    $|    panic()
    $|  }
    $|
    $|  lexbuf.reset(marked_pos)
    $|  match pattern_id {
    $|
    ,
  )
  for pattern_id, codeblock in dfa.code_blocks {
    out.write_string(
      $|    \{pattern_id} => {
      $|
      ,
    )
    let subst = @codeblock_parser.parse_codeblock(codeblock)
    for capture_id, capture in dfa.captures[pattern_id] {
      let (name, var_type) = capture
      fn name_used_in_subst(name : String) -> Bool {
        for item in subst {
          match item.desc {
            StartPosOf(n) | EndPosOf(n) => if n == name { return true }
          }
        }
        false
      }

      fn end_pos_used_in_subst(name : String) -> Bool {
        for item in subst {
          match item.desc {
            EndPosOf(n) => if n == name { return true }
            StartPosOf(_) => ()
          }
        }
        false
      }

      match var_type {
        Char => {
          out.write_string(
            $|      let _start_pos_of_\{name} = _captures[\{capture_id}].0
            $|      let \{name} = lexbuf.unsafe_get(_start_pos_of_\{name})
            $|
            ,
          )
          if end_pos_used_in_subst(name) {
            out.write_string(
              $|      let _end_pos_of_\{name} = _captures[\{capture_id}].1
              $|
              ,
            )
          }
        }
        String =>
          out.write_string(
            $|      let (_start_pos_of_\{name}, _end_pos_of_\{name}) = _captures[\{capture_id}]
            $|      let \{name} = lexbuf.sub_lexeme(_start_pos_of_\{name}, _end_pos_of_\{name})
            $|
            ,
          )
      }
      if name_used_in_subst(name) {
        out.write_string(
          $|      let _ = \{name}
          $|
          ,
        )
      }
    }
    out.write_string(
      $|\{rewrite_codeblock(codeblock, subst)}
      $|
      ,
    )
    out.write_string(
      $|    }
      $|
      ,
    )
  }
  out.write_string(
    $|    _ => panic()
    $|  }
    $|}
    $|
    $|
    ,
  )
  out.to_string()
}
