

fn test_func[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> String  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  while true {
    match state {
      0 => {
        _tag_0 = lexbuf.curr_pos()
        state = match lexbuf.next_as_int() {
          97 => 1
          _ => break
        }
      }
      1 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          97..=98 => 2
          _ => break
        }
      }
      2 => {
        state = match lexbuf.next_as_int() {
          97 => 3
          98 => 2
          _ => break
        }
      }
      3 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          97 => 3
          98 => 2
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
      let (_start_pos_of_t2, _end_pos_of_t2) = _captures[0]
      let t2 = lexbuf.get_string(_start_pos_of_t2, _end_pos_of_t2)

      t2
    
    }
    _ => panic()
  }
}




