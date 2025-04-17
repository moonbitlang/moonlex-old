


fn scan_newline[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> Int  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  while true {
    match state {
      0 => {
        _tag_0 = lexbuf.curr_pos()
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          0..=9 => 1
          10 => 2
          11..=12 => 1
          13 => 3
          14..=1114111 => 1
          _ => break
        }
      }
      1 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        break
      }
      2 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        break
      }
      3 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          10 => 2
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
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.sub_lexeme(_start_pos_of_t, _end_pos_of_t)
      let _ = t

      _start_pos_of_t
    
    }
    1 => {
 scan_newline(lexbuf) 
    }
    2 => {
 -1 
    }
    _ => panic()
  }
}




