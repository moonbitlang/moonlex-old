
pub(all) enum SubstItemDesc {
  StartPosOf(String)
  EndPosOf(String)
}

pub(all) struct SubstItem {
  start : Int
  end : Int
  desc : SubstItemDesc
}


fn scan_codeblock_rbrace[T : @lexbuf.IStringLexbuf](subst : Array[SubstItem], lexbuf : T) -> Unit  {
  let mut matched_pat = @int.max_value
  // FIXME: use -1 if we need to support capture as option
  let mut matched_pos = lexbuf.curr_pos()
  let _captures = FixedArray::make(6, matched_pos)
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  let mut _tag_2 = -1
  let mut _tag_3 = -1
  let mut _tag_4 = -1
  let mut _tag_5 = -1
  loop 0 {
    0 => {
      _tag_4 = lexbuf.curr_pos()
      if matched_pat >= 5 {
        matched_pat = 5
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        0..=35 => 1
        36 => 2
        37..=122 => 1
        123 => 3
        124 => 1
        125 => 4
        126..=1114111 => 1
        _ => break
      }
    }
    1 => {
      if matched_pat >= 4 {
        matched_pat = 4
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    2 => {
      _tag_0 = lexbuf.curr_pos()
      if matched_pat >= 4 {
        matched_pat = 4
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        65..=90 => 5
        95 => 5
        97..=100 => 5
        101 => 6
        102..=114 => 5
        115 => 7
        116..=122 => 5
        _ => break
      }
    }
    3 => {
      if matched_pat >= 0 {
        matched_pat = 0
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    4 => {
      if matched_pat >= 1 {
        matched_pat = 1
        matched_pos = lexbuf.curr_pos()
      }
      break
    }
    5 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=122 => 5
        _ => break
      }
    }
    6 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=109 => 5
        110 => 8
        111..=122 => 5
        _ => break
      }
    }
    7 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=115 => 5
        116 => 9
        117..=122 => 5
        _ => break
      }
    }
    8 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=99 => 5
        100 => 10
        101..=122 => 5
        _ => break
      }
    }
    9 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97 => 11
        98..=122 => 5
        _ => break
      }
    }
    10 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=111 => 5
        112 => 12
        113..=122 => 5
        _ => break
      }
    }
    11 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=113 => 5
        114 => 13
        115..=122 => 5
        _ => break
      }
    }
    12 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=110 => 5
        111 => 14
        112..=122 => 5
        _ => break
      }
    }
    13 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=115 => 5
        116 => 10
        117..=122 => 5
        _ => break
      }
    }
    14 => {
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=114 => 5
        115 => 15
        116..=122 => 5
        _ => break
      }
    }
    15 => {
      _tag_1 = lexbuf.curr_pos()
      if matched_pat >= 3 {
        matched_pat = 3
        matched_pos = lexbuf.curr_pos()
      }
      continue match lexbuf.next_as_int() {
        40 => 16
        48..=57 => 5
        65..=90 => 5
        95 => 5
        97..=122 => 5
        _ => break
      }
    }
    16 => {
      _tag_2 = lexbuf.curr_pos()
      continue match lexbuf.next_as_int() {
        9 => 16
        32 => 16
        65..=90 => 17
        95 => 17
        97..=122 => 17
        _ => break
      }
    }
    17 => {
      _tag_3 = lexbuf.curr_pos()
      continue match lexbuf.next_as_int() {
        9 => 18
        32 => 18
        41 => 19
        48..=57 => 17
        65..=90 => 17
        95 => 17
        97..=122 => 17
        _ => break
      }
    }
    18 => {
      continue match lexbuf.next_as_int() {
        9 => 18
        32 => 18
        41 => 19
        _ => break
      }
    }
    19 => {
      _tag_5 = lexbuf.curr_pos()
      if matched_pat >= 2 {
        matched_pat = 2
        matched_pos = lexbuf.curr_pos()
        _captures[0] = _tag_0
        _captures[1] = _tag_1
        _captures[2] = _tag_2
        _captures[3] = _tag_3
        _captures[4] = _tag_4
        _captures[5] = _tag_5
      }
      break
    }
    _ => panic()
  }

  guard matched_pat <= 5 else {
    // No pattern matched_pat
    panic()
  }

  lexbuf.reset(pos=matched_pos)
  match matched_pat {
    0 => {

      scan_codeblock_rbrace(subst, lexbuf)
      scan_codeblock_rbrace(subst, lexbuf)
    
    }
    1 => {
 () 
    }
    2 => {
      let _start_pos_of_t1 = _captures[0]
      let _end_pos_of_t1 = _captures[1]
      let t1 = lexbuf.get_string(_start_pos_of_t1, _end_pos_of_t1)
      let _start_pos_of_t2 = _captures[2]
      let _end_pos_of_t2 = _captures[3]
      let t2 = lexbuf.get_string(_start_pos_of_t2, _end_pos_of_t2)
      let _start_pos_of_t = _captures[4]
      let _end_pos_of_t = _captures[5]
      let t = lexbuf.get_string(_start_pos_of_t, _end_pos_of_t)
      let _ = t

      subst.push({ 
        start: _start_pos_of_t, 
        end: _end_pos_of_t, 
        desc: match t1 {
          "startpos" => StartPosOf(t2)
          "endpos" => EndPosOf(t2)
          _ => panic()
        }
      })
      scan_codeblock_rbrace(subst, lexbuf)
    
    }
    3 => {

      scan_codeblock_rbrace(subst, lexbuf)
    
    }
    4 => {
 scan_codeblock_rbrace(subst, lexbuf) 
    }
    5 => {
 () 
    }
    _ => panic()
  }
}




pub fn parse_codeblock(str : String) -> Array[SubstItem] {
  let lexbuf = @lexbuf.StringLexbuf::from_string(str)
  let subst = []
  scan_codeblock_rbrace(subst, lexbuf)
  subst
}
