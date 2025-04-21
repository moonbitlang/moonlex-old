


fn scan_newline[T : @lexbuf.IStringLexbuf](lexbuf : T) -> Int  {
  let mut matched_pat = @int.max_value
  // FIXME: use -1 if we need to support capture as option
  let mut matched_pos = lexbuf.curr_pos()
  let _captures = FixedArray::make(2, matched_pos)
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  loop 0 {
    0 => {
      _tag_0 = lexbuf.curr_pos()
      if matched_pat >= 2 {
        matched_pat = 2
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        0..=9 => 1
        10 => 2
        11..=12 => 1
        13 => 3
        14..=1114111 => 1
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
      _tag_1 = lexbuf.curr_pos()
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_0
        _captures[1] = _tag_1
      }
      break
    }
    3 => {
      _tag_1 = lexbuf.curr_pos()
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_0
        _captures[1] = _tag_1
      }
      continue match lexbuf.next_as_int() {
        10 => 2
        _ => break
      }
    }
    _ => panic()
  }

  guard matched_pat <= 2 else {
    // No pattern matched_pat
    panic()
  }

  lexbuf.reset(pos=matched_pos)
  match matched_pat {
    0 => {
      let _start_pos_of_t = _captures[0]
      let _end_pos_of_t = _captures[1]
      let t = lexbuf.get_string(_start_pos_of_t, _end_pos_of_t)
      let _ = t

      _start_pos_of_t
    
    }
    1 => {
 scan_newline(lexbuf) 
    }
    2 => {
 -1 
    }
    _ => panic()
  }
}




