

fn lex_unicode(lexbuf : @lexbuf.T) -> Int  {
  let mut matched = None
  let mut state = 0
  while true {
    match state {
      0 => {
        state = match lexbuf.next_as_int() {
          0..=127 => 10
          194 => 9
          195..=222 => 8
          223 => 7
          224 => 6
          225..=226 => 5
          227 => 12
          228..=229 => 5
          230 => 11
          231..=238 => 5
          239 => 4
          240 => 3
          241..=243 => 2
          244 => 1
          _ => break
        }
      }
      1 => {
        state = match lexbuf.next_as_int() {
          128..=142 => 13
          143 => 14
          144..=191 => 13
          _ => break
        }
      }
      2 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 13
          _ => break
        }
      }
      3 => {
        state = match lexbuf.next_as_int() {
          144 => 15
          145..=159 => 17
          160 => 16
          161..=191 => 17
          _ => break
        }
      }
      4 => {
        state = match lexbuf.next_as_int() {
          128..=190 => 18
          191 => 19
          _ => break
        }
      }
      5 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 20
          _ => break
        }
      }
      6 => {
        state = match lexbuf.next_as_int() {
          128..=159 => 21
          160 => 22
          161..=191 => 21
          _ => break
        }
      }
      7 => {
        state = match lexbuf.next_as_int() {
          128..=190 => 23
          191 => 24
          _ => break
        }
      }
      8 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 25
          _ => break
        }
      }
      9 => {
        state = match lexbuf.next_as_int() {
          128 => 26
          129..=191 => 27
          _ => break
        }
      }
      10 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      11 => {
        state = match lexbuf.next_as_int() {
          128..=135 => 20
          136 => 28
          137..=191 => 20
          _ => break
        }
      }
      12 => {
        state = match lexbuf.next_as_int() {
          128 => 20
          129 => 30
          130 => 29
          131..=191 => 20
          _ => break
        }
      }
      13 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 31
          _ => break
        }
      }
      14 => {
        state = match lexbuf.next_as_int() {
          128..=190 => 33
          191 => 32
          _ => break
        }
      }
      15 => {
        state = match lexbuf.next_as_int() {
          128 => 34
          129..=191 => 35
          _ => break
        }
      }
      16 => {
        state = match lexbuf.next_as_int() {
          128..=173 => 36
          174 => 37
          175..=191 => 36
          _ => break
        }
      }
      17 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 36
          _ => break
        }
      }
      18 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 38
          _ => break
        }
      }
      19 => {
        state = match lexbuf.next_as_int() {
          128..=190 => 39
          191 => 40
          _ => break
        }
      }
      20 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 41
          _ => break
        }
      }
      21 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 42
          _ => break
        }
      }
      22 => {
        state = match lexbuf.next_as_int() {
          128 => 44
          129..=191 => 43
          _ => break
        }
      }
      23 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      24 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      25 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      26 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      27 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      28 => {
        state = match lexbuf.next_as_int() {
          128..=144 => 41
          145 => 45
          146..=191 => 41
          _ => break
        }
      }
      29 => {
        state = match lexbuf.next_as_int() {
          128..=149 => 51
          150 => 50
          151..=152 => 49
          153 => 46
          154..=158 => 47
          159 => 48
          160..=191 => 49
          _ => break
        }
      }
      30 => {
        state = match lexbuf.next_as_int() {
          128 => 53
          129 => 54
          130..=191 => 52
          _ => break
        }
      }
      31 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 55
          _ => break
        }
      }
      32 => {
        state = match lexbuf.next_as_int() {
          128..=190 => 57
          191 => 56
          _ => break
        }
      }
      33 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 58
          _ => break
        }
      }
      34 => {
        state = match lexbuf.next_as_int() {
          128 => 60
          129..=191 => 59
          _ => break
        }
      }
      35 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 61
          _ => break
        }
      }
      36 => {
        state = match lexbuf.next_as_int() {
          128..=191 => 62
          _ => break
        }
      }
      37 => {
        state = match lexbuf.next_as_int() {
          128..=182 => 62
          183 => 63
          184..=191 => 62
          _ => break
        }
      }
      38 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      39 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      40 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      41 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      42 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      43 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      44 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      45 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          231 => 64
          _ => break
        }
      }
      46 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      47 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      48 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      49 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      50 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      51 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      52 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      53 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      54 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        break
      }
      55 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      56 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      57 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      58 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      59 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      60 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      61 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      62 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      63 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        break
      }
      64 => {
        state = match lexbuf.next_as_int() {
          136 => 65
          _ => break
        }
      }
      65 => {
        state = match lexbuf.next_as_int() {
          177 => 66
          _ => break
        }
      }
      66 => {
        state = match lexbuf.next_as_int() {
          228 => 67
          _ => break
        }
      }
      67 => {
        state = match lexbuf.next_as_int() {
          184 => 68
          _ => break
        }
      }
      68 => {
        state = match lexbuf.next_as_int() {
          173 => 69
          _ => break
        }
      }
      69 => {
        state = match lexbuf.next_as_int() {
          229 => 70
          _ => break
        }
      }
      70 => {
        state = match lexbuf.next_as_int() {
          155 => 71
          _ => break
        }
      }
      71 => {
        state = match lexbuf.next_as_int() {
          189 => 72
          _ => break
        }
      }
      72 => {
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
