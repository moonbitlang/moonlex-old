
pub type! MalformedUtf8Error


fn lex_utf8(lexbuf : @lexbuf.T, buf : StringBuilder) -> Unit!MalformedUtf8Error  {
  let mut matched_pat = @int.max_value
  // FIXME: use -1 if we need to support capture as option
  let start_pos = lexbuf.curr_pos()
  let mut matched_pos = start_pos
  let _captures = FixedArray::make(8, start_pos)
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
  loop 0 {
    0 => {
      _tag_0 = lexbuf.curr_pos()
      _tag_2 = lexbuf.curr_pos()
      _tag_6 = lexbuf.curr_pos()
      _tag_12 = lexbuf.curr_pos()
      continue match lexbuf.next_as_int() {
        -1 => 1
        0..=127 => 2
        128..=193 => 3
        194..=223 => 4
        224..=239 => 5
        240..=244 => 6
        245..=1114111 => 3
        _ => break
      }
    }
    1 => {
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    2 => {
      _tag_1 = lexbuf.curr_pos()
      if matched_pat >= 1 {
        matched_pat = 1
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_0
        _captures[1] = _tag_1
      }
      break
    }
    3 => {
      if matched_pat >= 5 {
        matched_pat = 5
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    4 => {
      _tag_3 = lexbuf.curr_pos()
      _tag_4 = lexbuf.curr_pos()
      if matched_pat >= 5 {
        matched_pat = 5
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        128..=191 => 8
        _ => break
      }
    }
    5 => {
      _tag_7 = lexbuf.curr_pos()
      _tag_8 = lexbuf.curr_pos()
      if matched_pat >= 5 {
        matched_pat = 5
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        128..=191 => 9
        _ => break
      }
    }
    6 => {
      _tag_13 = lexbuf.curr_pos()
      _tag_14 = lexbuf.curr_pos()
      if matched_pat >= 5 {
        matched_pat = 5
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        128..=191 => 7
        _ => break
      }
    }
    7 => {
      _tag_15 = lexbuf.curr_pos()
      _tag_16 = lexbuf.curr_pos()
      continue match lexbuf.next_as_int() {
        128..=191 => 10
        _ => break
      }
    }
    8 => {
      _tag_5 = lexbuf.curr_pos()
      if matched_pat >= 2 {
        matched_pat = 2
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_2
        _captures[1] = _tag_3
        _captures[2] = _tag_4
        _captures[3] = _tag_5
      }
      break
    }
    9 => {
      _tag_9 = lexbuf.curr_pos()
      _tag_10 = lexbuf.curr_pos()
      continue match lexbuf.next_as_int() {
        128..=191 => 11
        _ => break
      }
    }
    10 => {
      _tag_17 = lexbuf.curr_pos()
      _tag_18 = lexbuf.curr_pos()
      continue match lexbuf.next_as_int() {
        128..=191 => 12
        _ => break
      }
    }
    11 => {
      _tag_11 = lexbuf.curr_pos()
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_6
        _captures[1] = _tag_7
        _captures[2] = _tag_8
        _captures[3] = _tag_9
        _captures[4] = _tag_10
        _captures[5] = _tag_11
      }
      break
    }
    12 => {
      _tag_19 = lexbuf.curr_pos()
      if matched_pat >= 4 {
        matched_pat = 4
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_12
        _captures[1] = _tag_13
        _captures[2] = _tag_14
        _captures[3] = _tag_15
        _captures[4] = _tag_16
        _captures[5] = _tag_17
        _captures[6] = _tag_18
        _captures[7] = _tag_19
      }
      break
    }
    _ => panic()
  }

  guard matched_pat <= 5 else {
    // No pattern matched_pat
    panic()
  }

  lexbuf.reset(matched_pos)
  match matched_pat {
    0 => {
 () 
    }
    1 => {
      let _start_pos_of_t = _captures[0]
      let _end_pos_of_t = _captures[1]
      let t = lexbuf.get_char(_start_pos_of_t, _end_pos_of_t)
 
      let c = Char::from_int(t.to_int())
      buf.write_char(c)
      lex_utf8!(lexbuf, buf)
    
    }
    2 => {
      let _start_pos_of_t1 = _captures[0]
      let _end_pos_of_t1 = _captures[1]
      let t1 = lexbuf.get_char(_start_pos_of_t1, _end_pos_of_t1)
      let _start_pos_of_t2 = _captures[2]
      let _end_pos_of_t2 = _captures[3]
      let t2 = lexbuf.get_char(_start_pos_of_t2, _end_pos_of_t2)

      let c = Char::from_int((t1.to_int() & 0x1f) << 6 | (t2.to_int() & 0x3f))
      buf.write_char(c)
      lex_utf8!(lexbuf, buf)
    
    }
    3 => {
      let _start_pos_of_t1 = _captures[0]
      let _end_pos_of_t1 = _captures[1]
      let t1 = lexbuf.get_char(_start_pos_of_t1, _end_pos_of_t1)
      let _start_pos_of_t2 = _captures[2]
      let _end_pos_of_t2 = _captures[3]
      let t2 = lexbuf.get_char(_start_pos_of_t2, _end_pos_of_t2)
      let _start_pos_of_t3 = _captures[4]
      let _end_pos_of_t3 = _captures[5]
      let t3 = lexbuf.get_char(_start_pos_of_t3, _end_pos_of_t3)

      let c = Char::from_int((t1.to_int() & 0x0f) << 12 | (t2.to_int() & 0x3f) << 6 | (t3.to_int() & 0x3f))
      buf.write_char(c)
      lex_utf8!(lexbuf, buf)
    
    }
    4 => {
      let _start_pos_of_t1 = _captures[0]
      let _end_pos_of_t1 = _captures[1]
      let t1 = lexbuf.get_char(_start_pos_of_t1, _end_pos_of_t1)
      let _start_pos_of_t2 = _captures[2]
      let _end_pos_of_t2 = _captures[3]
      let t2 = lexbuf.get_char(_start_pos_of_t2, _end_pos_of_t2)
      let _start_pos_of_t3 = _captures[4]
      let _end_pos_of_t3 = _captures[5]
      let t3 = lexbuf.get_char(_start_pos_of_t3, _end_pos_of_t3)
      let _start_pos_of_t4 = _captures[6]
      let _end_pos_of_t4 = _captures[7]
      let t4 = lexbuf.get_char(_start_pos_of_t4, _end_pos_of_t4)

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
