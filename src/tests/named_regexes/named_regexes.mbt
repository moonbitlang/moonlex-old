

fn lex_is_number[T, C, S, P](lexbuf : @lexbuf.T[T, C, S, P]) -> Bool  {
  let mut matched = None
  let mut state = 0
  while true {
    match state {
      0 => {
        state = match lexbuf.next_as_int() {
          0..=47 => 3
          48 => 2
          49..=57 => 1
          58..=1114111 => 3
          _ => break
        }
      }
      1 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 4
          _ => break
        }
      }
      2 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        break
      }
      3 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        break
      }
      4 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 4
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
 true 
    }
    1 => {
 false 
    }
    _ => panic()
  }
}




pub fn is_number(str : String) -> Bool {
    let lexbuf = @lexbuf.from_string(str)
    lex_is_number(lexbuf)
}
