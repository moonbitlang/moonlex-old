
priv enum Token {
  PERCENT
  PERCENT_EOF
  NON_PERCENT
  EOF
} derive(ToJson)


fn token[T : @lexbuf.IStringLexbuf](lexbuf : T) -> Token  {
  // The matched pattern id
  let mut matched = @int.max_value
  let mut _end_pos = -1
  let mut _start_pos = lexbuf.curr_pos()
  let mut _capture_0_start = -1
  let mut _capture_0_end = -1
  loop 0 {
    0 => {
      continue match lexbuf.next_as_int() {
        -1 => 1
        0..=36 => 2
        37 => 3
        38..=1114111 => 2
        _ => break
      }
    }
    1 => {
      if matched >= 3 {
        matched = 3
        _end_pos = lexbuf.curr_pos()
      }
      break
    }
    2 => {
      if matched >= 2 {
        matched = 2
        _end_pos = lexbuf.curr_pos()
      }
      break
    }
    3 => {
      if matched >= 1 {
        matched = 1
        _end_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        -1 => 4
        _ => break
      }
    }
    4 => {
      if matched >= 0 {
        matched = 0
        _end_pos = lexbuf.curr_pos()
      }
      break
    }
    _ => panic()
  }

  guard matched <= 3 else {
    // No pattern matched
    panic()
  }

  lexbuf.reset(pos=_end_pos)
  match matched {
    0 => {
      ()
 PERCENT_EOF 
    }
    1 => {
      ()
 PERCENT 
    }
    2 => {
      ()
 NON_PERCENT 
    }
    3 => {
      ()
 EOF 
    }
    _ => panic()
  }
}



