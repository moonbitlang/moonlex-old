

fn lex_is_number[T : @lexbuf.IStringLexbuf](lexbuf : T) -> Bool  {
  // The matched pattern id
  let mut matched = @int.max_value
  let mut _end_pos = -1
  let mut _start_pos = lexbuf.curr_pos()
  let mut _capture_0_start = -1
  let mut _capture_0_end = -1
  loop 0 {
    0 => {
      continue match lexbuf.next_as_int() {
        0..=47 => 1
        48 => 2
        49..=57 => 3
        58..=1114111 => 1
        _ => break
      }
    }
    1 => {
      if matched >= 1 {
        matched = 1
        _end_pos = lexbuf.curr_pos()
      }
      break
    }
    2 => {
      if matched >= 0 {
        matched = 0
        _end_pos = lexbuf.curr_pos()
      }
      break
    }
    3 => {
      if matched >= 0 {
        matched = 0
        _end_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 3
        _ => break
      }
    }
    _ => panic()
  }

  guard matched <= 1 else {
    // No pattern matched
    panic()
  }

  lexbuf.reset(pos=_end_pos)
  match matched {
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
    let lexbuf = @lexbuf.StringLexbuf::from_string(str)
    lex_is_number(lexbuf)
}
