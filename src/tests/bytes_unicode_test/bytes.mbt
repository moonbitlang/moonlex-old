

fn lex_unicode(lexbuf : @lexbuf.T) -> Int  {
  let mut matched = None
  let mut state = 0
  while state != -1 {
    match state {
      0 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
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
          _ => -1
        }
      }
      1 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=142 => 13
          143 => 14
          144..=191 => 13
          _ => -1
        }
      }
      2 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 13
          _ => -1
        }
      }
      3 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          144 => 15
          145..=159 => 17
          160 => 16
          161..=191 => 17
          _ => -1
        }
      }
      4 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=190 => 18
          191 => 19
          _ => -1
        }
      }
      5 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 20
          _ => -1
        }
      }
      6 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=159 => 21
          160 => 22
          161..=191 => 21
          _ => -1
        }
      }
      7 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=190 => 23
          191 => 24
          _ => -1
        }
      }
      8 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 25
          _ => -1
        }
      }
      9 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128 => 26
          129..=191 => 27
          _ => -1
        }
      }
      10 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      11 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=135 => 20
          136 => 28
          137..=191 => 20
          _ => -1
        }
      }
      12 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128 => 20
          129 => 30
          130 => 29
          131..=191 => 20
          _ => -1
        }
      }
      13 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 31
          _ => -1
        }
      }
      14 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=190 => 33
          191 => 32
          _ => -1
        }
      }
      15 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128 => 34
          129..=191 => 35
          _ => -1
        }
      }
      16 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=173 => 36
          174 => 37
          175..=191 => 36
          _ => -1
        }
      }
      17 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 36
          _ => -1
        }
      }
      18 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 38
          _ => -1
        }
      }
      19 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=190 => 39
          191 => 40
          _ => -1
        }
      }
      20 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 41
          _ => -1
        }
      }
      21 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 42
          _ => -1
        }
      }
      22 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128 => 44
          129..=191 => 43
          _ => -1
        }
      }
      23 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      24 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      25 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      26 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      27 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      28 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=144 => 41
          145 => 45
          146..=191 => 41
          _ => -1
        }
      }
      29 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=149 => 51
          150 => 50
          151..=152 => 49
          153 => 46
          154..=158 => 47
          159 => 48
          160..=191 => 49
          _ => -1
        }
      }
      30 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128 => 53
          129 => 54
          130..=191 => 52
          _ => -1
        }
      }
      31 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 55
          _ => -1
        }
      }
      32 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=190 => 57
          191 => 56
          _ => -1
        }
      }
      33 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 58
          _ => -1
        }
      }
      34 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128 => 60
          129..=191 => 59
          _ => -1
        }
      }
      35 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 61
          _ => -1
        }
      }
      36 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => 62
          _ => -1
        }
      }
      37 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=182 => 62
          183 => 63
          184..=191 => 62
          _ => -1
        }
      }
      38 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      39 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      40 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      41 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      42 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      43 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      44 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      45 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          231 => 64
          _ => -1
        }
      }
      46 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      47 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      48 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      49 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      50 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      51 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      52 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      53 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      54 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      55 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      56 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      57 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      58 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      59 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      60 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      61 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      62 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      63 => {
        if matched is Some((prev_pattern_id, _, _)) && 1 <= prev_pattern_id || matched is None {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      64 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          136 => 65
          _ => -1
        }
      }
      65 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          177 => 66
          _ => -1
        }
      }
      66 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          228 => 67
          _ => -1
        }
      }
      67 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          184 => 68
          _ => -1
        }
      }
      68 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          173 => 69
          _ => -1
        }
      }
      69 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          229 => 70
          _ => -1
        }
      }
      70 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          155 => 71
          _ => -1
        }
      }
      71 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          189 => 72
          _ => -1
        }
      }
      72 => {
        if matched is Some((prev_pattern_id, _, _)) && 0 <= prev_pattern_id || matched is None {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
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
