
priv enum Token {
  PERCENT
  PERCENT_EOF
  NON_PERCENT
  EOF
} derive(ToJson)


fn token[T, C, S, P](lexbuf : @lexbuf.T[T, C, S, P]) -> Token  {
  let mut matched_pat = @int.max_value
  // FIXME: use -1 if we need to support capture as option
  let start_pos = lexbuf.curr_pos()
  let mut matched_pos = start_pos
  let _captures = FixedArray::make(0, start_pos)
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

  lexbuf.reset(matched_pos)
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



