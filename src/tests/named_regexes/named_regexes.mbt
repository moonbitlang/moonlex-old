

fn lex_is_number[T : @lexbuf.IStringLexbuf](lexbuf : T) -> Bool  {
  let mut matched_pat = @int.max_value
  let mut matched_pos = -1
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
      if matched_pat >= 1 {
        matched_pat = 1
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    2 => {
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    3 => {
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 3
        _ => break
      }
    }
    _ => panic()
  }

  guard matched_pat <= 1 else {
    // No pattern matched_pat
    panic()
  }

  lexbuf.reset(pos=matched_pos)
  match matched_pat {
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
