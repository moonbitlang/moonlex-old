
// translate from https://ohama.github.io/ocaml/ocamllex-tutorial/examples/wordcount/


fn count[T](lines : Int, words : Int, chars : Int, lexbuf : @lexbuf.T[T, Char, String, Int]) -> (Int, Int, Int)  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  while true {
    match state {
      0 => {
        _tag_0 = lexbuf.curr_pos()
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          0..=8 => 3
          9 => 2
          10 => 1
          11..=31 => 3
          32 => 2
          33..=1114111 => 3
          _ => break
        }
      }
      1 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        break
      }
      2 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      3 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          0..=8 => 4
          11..=31 => 4
          33..=1114111 => 4
          _ => break
        }
      }
      4 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          0..=8 => 4
          11..=31 => 4
          33..=1114111 => 4
          _ => break
        }
      }
      _ => panic()
    }
  }

  guard matched is Some((pattern_id, marked_pos, _captures)) else {
    // No pattern matched
    panic()
  }

  lexbuf.reset(marked_pos)
  match pattern_id {
    0 => {
 count(lines + 1, words, chars + 1, lexbuf) 
    }
    1 => {
      let (_start_pos_of_word, _end_pos_of_word) = _captures[0]
      let word = lexbuf.sub_lexeme(_start_pos_of_word, _end_pos_of_word)

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




