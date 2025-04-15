

fn test_func[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> String  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  _tag_0 = lexbuf.curr_pos()
  while state != -1 {
    match state {
      0 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          97 => {
            _tag_1 = lexbuf.curr_pos()
            1
          }
          _ => -1
        }
      }
      1 => {
        if matched is Some((prev_pattern_id, _, _)) && 0 <= prev_pattern_id || matched is None {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          97..=98 => 2
          _ => -1
        }
      }
      2 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          97 => {
            _tag_1 = lexbuf.curr_pos()
            3
          }
          98 => 2
          _ => -1
        }
      }
      3 => {
        if matched is Some((prev_pattern_id, _, _)) && 0 <= prev_pattern_id || matched is None {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          97 => {
            _tag_1 = lexbuf.curr_pos()
            3
          }
          98 => 2
          _ => -1
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
      let t2 = lexbuf.sub_lexeme(_start_pos_of_t2, _end_pos_of_t2)

      t2
    
    }
    _ => panic()
  }
}




