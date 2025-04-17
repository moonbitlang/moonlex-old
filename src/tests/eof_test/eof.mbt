
priv enum Token {
  PERCENT
  PERCENT_EOF
  NON_PERCENT
  EOF
} derive(ToJson)


fn token[T, C, S, P](lexbuf : @lexbuf.T[T, C, S, P]) -> Token  {
  let mut matched = None
  let mut state = 0
  while true {
    match state {
      0 => {
        state = match lexbuf.next_as_int() {
          -1 => 1
          0..=36 => 2
          37 => 3
          38..=1114111 => 2
          _ => break
        }
      }
      1 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
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
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          -1 => 4
          _ => break
        }
      }
      4 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        break
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



