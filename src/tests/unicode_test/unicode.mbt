

fn lex_unicode[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> Int  {
  let mut matched_pat = @int.max_value
  // FIXME: use -1 if we need to support capture as option
  let start_pos = lexbuf.curr_pos()
  let mut matched_pos = start_pos
  let _captures = FixedArray::make(0, start_pos)
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

  lexbuf.reset(matched_pos)
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
  let lexbuf = @lexbuf.from_string(str)
  lex_unicode(lexbuf)
}
