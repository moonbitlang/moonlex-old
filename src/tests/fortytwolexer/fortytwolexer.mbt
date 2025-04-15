


fn scan_newline[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> Int  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  _tag_0 = lexbuf.curr_pos()
  while state != -1 {
    match state {
      0 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          0..=9 => 1
          10 => {
            _tag_1 = lexbuf.curr_pos()
            2
          }
          11..=12 => 1
          13 => {
            _tag_1 = lexbuf.curr_pos()
            3
          }
          14..=1114111 => 1
          _ => -1
        }
      }
      1 => {
        if matched is Some((prev_pattern_id, _, _)) && 1 <= prev_pattern_id || matched is None {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      2 => {
        if matched is Some((prev_pattern_id, _, _)) && 0 <= prev_pattern_id || matched is None {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
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
          10 => {
            _tag_1 = lexbuf.curr_pos()
            4
          }
          _ => -1
        }
      }
      4 => {
        if matched is Some((prev_pattern_id, _, _)) && 0 <= prev_pattern_id || matched is None {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
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




