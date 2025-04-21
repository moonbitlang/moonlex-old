
priv enum Token {
  PERCENT
  PERCENT_EOF
  NON_PERCENT
  EOF
} derive(ToJson)


fn token[T : @lexbuf.IStringLexbuf](lexbuf : T) -> Token  {
  let mut matched_pat = @int.max_value
  let mut matched_pos = -1
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
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    2 => {
      if matched_pat >= 2 {
        matched_pat = 2
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    3 => {
      if matched_pat >= 1 {
        matched_pat = 1
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        -1 => 4
        _ => break
      }
    }
    4 => {
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    _ => panic()
  }

  guard matched_pat <= 3 else {
    // No pattern matched_pat
    panic()
  }

  lexbuf.reset(pos=matched_pos)
  match matched_pat {
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



