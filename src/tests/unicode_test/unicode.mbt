

fn lex_unicode[T : @lexbuf.IStringLexbuf](lexbuf : T) -> Int  {
  let mut matched_pat = @int.max_value
  let mut matched_pos = -1
  let mut _capture_0_start = -1
  let mut _capture_0_end = -1
  loop 0 {
    0 => {
      continue match lexbuf.next_as_int() {
        0..=12352 => 1
        12353..=12438 => 2
        12439..=12440 => 1
        12441..=12447 => 2
        12448..=25104 => 1
        25105 => 3
        25106..=134070 => 1
        134071 => 4
        134072..=1114111 => 1
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
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        29233 => 5
        _ => break
      }
    }
    4 => {
      if matched_pat >= 1 {
        matched_pat = 1
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    5 => {
      continue match lexbuf.next_as_int() {
        20013 => 6
        _ => break
      }
    }
    6 => {
      continue match lexbuf.next_as_int() {
        22269 => 7
        _ => break
      }
    }
    7 => {
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
 1 
    }
    1 => {
 2 
    }
    2 => {
 3 
    }
    3 => {
 4 
    }
    _ => panic()
  }
}




fn classify(str : String) -> Int {
  let lexbuf = @lexbuf.StringLexbuf::from_string(str)
  lex_unicode(lexbuf)
}
