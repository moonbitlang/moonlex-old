
pub type! MalformedUtf8Error


fn lex_utf8(lexbuf : @lexbuf.T, buf : StringBuilder) -> Unit!MalformedUtf8Error  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  let mut _tag_2 = -1
  let mut _tag_3 = -1
  let mut _tag_4 = -1
  let mut _tag_5 = -1
  let mut _tag_6 = -1
  let mut _tag_7 = -1
  let mut _tag_8 = -1
  let mut _tag_9 = -1
  let mut _tag_10 = -1
  let mut _tag_11 = -1
  let mut _tag_12 = -1
  let mut _tag_13 = -1
  let mut _tag_14 = -1
  let mut _tag_15 = -1
  let mut _tag_16 = -1
  let mut _tag_17 = -1
  let mut _tag_18 = -1
  let mut _tag_19 = -1
  _tag_0 = lexbuf.curr_pos()
  _tag_2 = lexbuf.curr_pos()
  _tag_6 = lexbuf.curr_pos()
  _tag_12 = lexbuf.curr_pos()
  while state != -1 {
    match state {
      0 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          -1 => 3
          0..=127 => {
            _tag_1 = lexbuf.curr_pos()
            1
          }
          128..=193 => 2
          194..=223 => {
            _tag_3 = lexbuf.curr_pos()
            _tag_4 = lexbuf.curr_pos()
            5
          }
          224..=239 => {
            _tag_7 = lexbuf.curr_pos()
            _tag_8 = lexbuf.curr_pos()
            6
          }
          240..=244 => {
            _tag_13 = lexbuf.curr_pos()
            _tag_14 = lexbuf.curr_pos()
            4
          }
          245..=1114111 => 2
          _ => -1
        }
      }
      1 => {
        if matched is Some((prev_pattern_id, _, _)) && 1 <= prev_pattern_id || matched is None {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      2 => {
        if matched is Some((prev_pattern_id, _, _)) && 5 <= prev_pattern_id || matched is None {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      3 => {
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
      4 => {
        if matched is Some((prev_pattern_id, _, _)) && 5 <= prev_pattern_id || matched is None {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => {
            _tag_15 = lexbuf.curr_pos()
            _tag_16 = lexbuf.curr_pos()
            7
          }
          _ => -1
        }
      }
      5 => {
        if matched is Some((prev_pattern_id, _, _)) && 5 <= prev_pattern_id || matched is None {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => {
            _tag_5 = lexbuf.curr_pos()
            8
          }
          _ => -1
        }
      }
      6 => {
        if matched is Some((prev_pattern_id, _, _)) && 5 <= prev_pattern_id || matched is None {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => {
            _tag_9 = lexbuf.curr_pos()
            _tag_10 = lexbuf.curr_pos()
            9
          }
          _ => -1
        }
      }
      7 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => {
            _tag_17 = lexbuf.curr_pos()
            _tag_18 = lexbuf.curr_pos()
            10
          }
          _ => -1
        }
      }
      8 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), [(_tag_2, _tag_3), (_tag_4, _tag_5)]))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      9 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => {
            _tag_11 = lexbuf.curr_pos()
            11
          }
          _ => -1
        }
      }
      10 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          128..=191 => {
            _tag_19 = lexbuf.curr_pos()
            12
          }
          _ => -1
        }
      }
      11 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), [(_tag_6, _tag_7), (_tag_8, _tag_9), (_tag_10, _tag_11)]))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          _ => -1
        }
      }
      12 => {
        if matched is Some((prev_pattern_id, _, _)) && 4 <= prev_pattern_id || matched is None {
          matched = Some((4, lexbuf.curr_pos(), [(_tag_12, _tag_13), (_tag_14, _tag_15), (_tag_16, _tag_17), (_tag_18, _tag_19)]))
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
 () 
    }
    1 => {
      let _start_pos_of_t = _captures[0].0
      let t = lexbuf.unsafe_get(_start_pos_of_t)
 
      let c = Char::from_int(t.to_int())
      buf.write_char(c)
      lex_utf8!(lexbuf, buf)
    
    }
    2 => {
      let _start_pos_of_t1 = _captures[0].0
      let t1 = lexbuf.unsafe_get(_start_pos_of_t1)
      let _start_pos_of_t2 = _captures[1].0
      let t2 = lexbuf.unsafe_get(_start_pos_of_t2)

      let c = Char::from_int((t1.to_int() & 0x1f) << 6 | (t2.to_int() & 0x3f))
      buf.write_char(c)
      lex_utf8!(lexbuf, buf)
    
    }
    3 => {
      let _start_pos_of_t1 = _captures[0].0
      let t1 = lexbuf.unsafe_get(_start_pos_of_t1)
      let _start_pos_of_t2 = _captures[1].0
      let t2 = lexbuf.unsafe_get(_start_pos_of_t2)
      let _start_pos_of_t3 = _captures[2].0
      let t3 = lexbuf.unsafe_get(_start_pos_of_t3)

      let c = Char::from_int((t1.to_int() & 0x0f) << 12 | (t2.to_int() & 0x3f) << 6 | (t3.to_int() & 0x3f))
      buf.write_char(c)
      lex_utf8!(lexbuf, buf)
    
    }
    4 => {
      let _start_pos_of_t1 = _captures[0].0
      let t1 = lexbuf.unsafe_get(_start_pos_of_t1)
      let _start_pos_of_t2 = _captures[1].0
      let t2 = lexbuf.unsafe_get(_start_pos_of_t2)
      let _start_pos_of_t3 = _captures[2].0
      let t3 = lexbuf.unsafe_get(_start_pos_of_t3)
      let _start_pos_of_t4 = _captures[3].0
      let t4 = lexbuf.unsafe_get(_start_pos_of_t4)

      let c = Char::from_int((t1.to_int() & 0x07) << 18 | (t2.to_int() & 0x3f) << 12 | (t3.to_int() & 0x3f) << 6 | (t4.to_int() & 0x3f))
      buf.write_char(c)
      lex_utf8!(lexbuf, buf)
    
    }
    5 => {
 raise MalformedUtf8Error 
    }
    _ => panic()
  }
}




fn utf8_decode(bytes : Bytes) -> String!MalformedUtf8Error {
  let buf = StringBuilder::new()
  let lexbuf = @lexbuf.from_bytes(bytes)
  lex_utf8!(lexbuf, buf)
  buf.to_string()
}
