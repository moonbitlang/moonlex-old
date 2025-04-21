

fn test_func[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> String  {
  let mut matched_pat = @int.max_value
  // FIXME: use -1 if we need to support capture as option
  let start_pos = lexbuf.curr_pos()
  let mut matched_pos = start_pos
  let _captures = FixedArray::make(2, start_pos)
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  loop 0 {
    0 => {
      _tag_0 = lexbuf.curr_pos()
      continue match lexbuf.next_as_int() {
        97 => 1
        _ => break
      }
    }
    1 => {
      _tag_1 = lexbuf.curr_pos()
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_0
        _captures[1] = _tag_1
      }
      continue match lexbuf.next_as_int() {
        97..=98 => 2
        _ => break
      }
    }
    2 => {
      continue match lexbuf.next_as_int() {
        97 => 3
        98 => 2
        _ => break
      }
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
        97 => 3
        98 => 2
        _ => break
      }
    }
    _ => panic()
  }

  guard matched_pat <= 0 else {
    // No pattern matched_pat
    panic()
  }

  lexbuf.reset(matched_pos)
  match matched_pat {
    0 => {
      let _start_pos_of_t2 = _captures[0]
      let _end_pos_of_t2 = _captures[1]
      let t2 = lexbuf.get_string(_start_pos_of_t2, _end_pos_of_t2)

      t2
    
    }
    _ => panic()
  }
}




