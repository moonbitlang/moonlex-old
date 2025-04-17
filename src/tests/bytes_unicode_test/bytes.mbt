

fn lex_unicode(lexbuf : @lexbuf.T) -> Int  {
  let mut matched = None
  let mut state = 0
  while true {
    match state {
      0 => {
        state = match lexbuf.next_as_int() {
          0..=127 => 1
          194..=223 => 2
          224..=226 => 3
          227 => 4
          228..=229 => 3
          230 => 5
          231..=239 => 3
          240 => 6
          241..=244 => 7
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
        state = match lexbuf.next_as_int() {
          128..=191 => 1
          _ => break
        }
      }
      3 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 2
          _ => break
        }
      }
      4 => {
        state = match lexbuf.next_as_int() {
          128 => 2
          129..=130 => 10
          131..=191 => 2
          _ => break
        }
      }
      5 => {
        state = match lexbuf.next_as_int() {
          128..=135 => 2
          136 => 9
          137..=191 => 2
          _ => break
        }
      }
      6 => {
        state = match lexbuf.next_as_int() {
          144..=159 => 3
          160 => 8
          161..=191 => 3
          _ => break
        }
      }
      7 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 3
          _ => break
        }
      }
      8 => {
        state = match lexbuf.next_as_int() {
          128..=173 => 2
          174 => 11
          175..=191 => 2
          _ => break
        }
      }
      9 => {
        state = match lexbuf.next_as_int() {
          128..=144 => 1
          145 => 12
          146..=191 => 1
          _ => break
        }
      }
      10 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 13
          _ => break
        }
      }
      11 => {
        state = match lexbuf.next_as_int() {
          128..=182 => 1
          183 => 14
          184..=191 => 1
          _ => break
        }
      }
      12 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          231 => 15
          _ => break
        }
      }
      13 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      14 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        break
      }
      15 => {
        state = match lexbuf.next_as_int() {
          136 => 16
          _ => break
        }
      }
      16 => {
        state = match lexbuf.next_as_int() {
          177 => 17
          _ => break
        }
      }
      17 => {
        state = match lexbuf.next_as_int() {
          228 => 18
          _ => break
        }
      }
      18 => {
        state = match lexbuf.next_as_int() {
          184 => 19
          _ => break
        }
      }
      19 => {
        state = match lexbuf.next_as_int() {
          173 => 20
          _ => break
        }
      }
      20 => {
        state = match lexbuf.next_as_int() {
          229 => 21
          _ => break
        }
      }
      21 => {
        state = match lexbuf.next_as_int() {
          155 => 22
          _ => break
        }
      }
      22 => {
        state = match lexbuf.next_as_int() {
          189 => 23
          _ => break
        }
      }
      23 => {
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




fn classify(bytes : Bytes) -> Int {
  let lexbuf = @lexbuf.from_bytes(bytes)
  lex_unicode(lexbuf)
}
