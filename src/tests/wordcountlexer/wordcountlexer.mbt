
// translate from https://ohama.github.io/ocaml/ocamllex-tutorial/examples/wordcount/


fn count[T : @lexbuf.IStringLexbuf](lines : Int, words : Int, chars : Int, lexbuf : T) -> (Int, Int, Int)  {
  let mut matched_pat = @int.max_value
  // FIXME: use -1 if we need to support capture as option
  let mut matched_pos = lexbuf.curr_pos()
  let _captures = FixedArray::make(2, matched_pos)
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  loop 0 {
    0 => {
      _tag_0 = lexbuf.curr_pos()
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        0..=8 => 1
        9 => 2
        10 => 3
        11..=31 => 1
        32 => 2
        33..=1114111 => 1
        _ => break
      }
    }
    1 => {
      _tag_1 = lexbuf.curr_pos()
      if matched_pat >= 1 {
        matched_pat = 1
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_0
        _captures[1] = _tag_1
      }
      continue match lexbuf.next_as_int() {
        0..=8 => 1
        11..=31 => 1
        33..=1114111 => 1
        _ => break
      }
    }
    2 => {
      if matched_pat >= 2 {
        matched_pat = 2
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    3 => {
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    _ => panic()
  }

  guard matched_pat <= 3 else {
    // No pattern matched_pat
    panic()
  }

  lexbuf.reset(pos=matched_pos)
  match matched_pat {
    0 => {
 count(lines + 1, words, chars + 1, lexbuf) 
    }
    1 => {
      let _start_pos_of_word = _captures[0]
      let _end_pos_of_word = _captures[1]
      let word = lexbuf.get_string(_start_pos_of_word, _end_pos_of_word)

      let new_chars = chars + word.length()
      count(lines, words + 1, new_chars, lexbuf)
    
    }
    2 => {
 count(lines, words, chars + 1, lexbuf) 
    }
    3 => {
 (lines, words, chars) 
    }
    _ => panic()
  }
}




