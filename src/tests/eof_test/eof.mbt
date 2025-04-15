
priv enum Token {
  PERCENT
  PERCENT_EOF
  NON_PERCENT
  EOF
} derive(ToJson)


fn token[T, C, S, P](lexbuf : @lexbuf.T[T, C, S, P]) -> Token  {
  let mut matched = None
  let mut state = 0
  while state != -1 {
    match state {
      0 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          -1 => 2
          0..=36 => 1
          37 => 3
          38..=1114111 => 1
          _ => -1
        }
      }
      1 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
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
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
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
        if matched is Some((prev_pattern_id, _, _)) && 1 <= prev_pattern_id || matched is None {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          -1 => 4
          _ => -1
        }
      }
      4 => {
        if matched is Some((prev_pattern_id, _, _)) && 0 <= prev_pattern_id || matched is None {
          matched = Some((0, lexbuf.curr_pos(), []))
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
 PERCENT_EOF 
    }
    1 => {
 PERCENT 
    }
    2 => {
 NON_PERCENT 
    }
    3 => {
 EOF 
    }
    _ => panic()
  }
}



