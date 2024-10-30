pub fn codegen_lex(lex: Lex) -> String {
  [
    lex.header, 
    (lex.rules.map(codegen_rule) |> String::concat(separator = "\n")),
    lex.trailer
  ] |> String::concat(separator = "\n\n") |> fix_indent
}

fn codegen_rule(rule: Rule) -> String {
  let dfa = @automaton.DFA::from_rule(rule)

  let engine_name = "__mbtlex_engine_\{rule.name}"

  let engine_graph = Array::makei(dfa.node_count + 1, fn (x) {
    Array::makei(128, fn (c) { dfa.graph[x].get_or_default(Char::from_int(c), 0) })
  })

  let engine_action = Array::makei(dfa.node_count + 1, fn (x) {
    dfa.actions[x]
  })

  [
    "let \{engine_name} : @moonbitlang/x/lex.Engine = { graph: \{engine_graph}, actions: \{engine_action}, code_blocks_n: \{dfa.code_blocks.length()} }",
    [
      ["fn \{rule.name}("], 
      rule.vars.map(fn (p) { "\{p.identifier} : \{p.ty}" }), 
      ["lexbuf : @moonbitlang/x/lex.Lexbuf", ")", "->", rule.return_type, "{"]
    ].flatten() |> String::concat(separator=" "),
    [
      ["match \{engine_name}.run(lexbuf) {"],
      dfa.code_blocks.mapi(fn (id, code_block) {
        "\{id} => {\{code_block}}"
      }),
      ["_ => abort(\"lexing: empty token\")"],
      ["}}"]
    ].flatten().map(fn (p) { "\t" + p }) |> String::concat(separator="\n"),
  ] |> String::concat(separator="\n")
}

fn fix_indent(code: String) -> String {
  // fix indent for the generated code
  // since moonbit require the toplevel definition at the head of line 
  // and the others not

  let code = "\n" + code

  let mut ptr = 0
  let mut indent_count = 0
  let buf = StringBuilder::new(size_hint = code.length())

  while ptr < code.length() {
    let ch = code[ptr]
    ptr += 1
    buf.write_char(ch)

    match ch {
      '\n' => {
        if indent_count == 0 {
          while ptr < code.length() && ['\t', ' '].contains(code.get(ptr)) {
            ptr += 1
          }
        } else {
          buf.write_char(' ')
        }
      }
      '{' => indent_count += 1
      '}' => indent_count -= 1

      '\\' => {
        if ptr < code.length() {
          buf.write_char(code.get(ptr))
          ptr += 1
        }
      }

      '\"' => {
        while ptr < code.length() {
          let ch = code.get(ptr)
          buf.write_char(code.get(ptr))
          if code.get(ptr) == '\\' {
            if ptr + 1 < code.length() {
              buf.write_char(code.get(ptr + 1))
            }
            ptr += 2
          } else {
            ptr += 1
          }

          if ch == '\"' {
            break
          }
        }
      }

      _ => ()
    }
  }

  buf.to_string()
}