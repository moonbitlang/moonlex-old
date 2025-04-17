

fn lex_unicode[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> Int  {
  let mut matched = None
  let mut state = 0
  while true {
    match state {
      0 => {
        state = match lexbuf.next_as_int() {
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
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          29233 => 5
          _ => break
        }
      }
      4 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        break
      }
      5 => {
        state = match lexbuf.next_as_int() {
          20013 => 6
          _ => break
        }
      }
      6 => {
        state = match lexbuf.next_as_int() {
          22269 => 7
          _ => break
        }
      }
      7 => {
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
