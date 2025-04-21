


fn scan_newline[T : @lexbuf.IStringLexbuf](lexbuf : T) -> Int  {
  // The matched pattern id
  let mut matched = @int.max_value
  let mut _end_pos = -1
  let mut _start_pos = lexbuf.curr_pos()
  let mut _capture_0_start = -1
  let mut _capture_0_end = -1
  let mut _capture_1_start = -1
  let mut _capture_1_end = -1
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  loop 0 {
    0 => {
      _tag_0 = lexbuf.curr_pos()
      if matched >= 2 {
        matched = 2
        _end_pos = lexbuf.curr_pos()
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
      if matched >= 1 {
        matched = 1
        _end_pos = lexbuf.curr_pos()
      }
      break
    }
    2 => {
      _tag_1 = lexbuf.curr_pos()
      if matched >= 0 {
        matched = 0
        _end_pos = lexbuf.curr_pos()
        _capture_0_start = _tag_0
        _capture_0_end = _tag_1
      }
      break
    }
    3 => {
      _tag_1 = lexbuf.curr_pos()
      if matched >= 0 {
        matched = 0
        _end_pos = lexbuf.curr_pos()
        _capture_0_start = _tag_0
        _capture_0_end = _tag_1
      }
      continue match lexbuf.next_as_int() {
        10 => 2
        _ => break
      }
    }
    _ => panic()
  }

  guard matched <= 2 else {
    // No pattern matched
    panic()
  }

  lexbuf.reset(pos=_end_pos)
  match matched {
    0 => {
      let _start_pos_of_t = _capture_0_start
      let _end_pos_of_t = _capture_0_end
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




