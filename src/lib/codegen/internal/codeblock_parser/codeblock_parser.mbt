
pub(all) enum SubstItemDesc {
  StartPosOf(String)
  EndPosOf(String)
}

pub(all) struct SubstItem {
  start : Int
  end : Int
  desc : SubstItemDesc
}


fn scan_codeblock_rbrace[T](subst : Array[SubstItem], lexbuf : @lexbuf.T[T, Char, String, Int]) -> Unit  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  let mut _tag_2 = -1
  let mut _tag_3 = -1
  let mut _tag_4 = -1
  let mut _tag_5 = -1
  _tag_4 = lexbuf.curr_pos()
  while state != -1 {
    match state {
      0 => {
        if matched is Some((prev_pattern_id, _, _)) && 5 <= prev_pattern_id || matched is None {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          0..=35 => 3
          36 => {
            _tag_0 = lexbuf.curr_pos()
            1
          }
          37..=122 => 3
          123 => 2
          124 => 3
          125 => 4
          126..=1114111 => 3
          _ => -1
        }
      }
      1 => {
        if matched is Some((prev_pattern_id, _, _)) && 4 <= prev_pattern_id || matched is None {
          matched = Some((4, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          65..=90 => 5
          95 => 5
          97..=100 => 5
          101 => 6
          102..=114 => 5
          115 => 7
          116..=122 => 5
          _ => -1
        }
      }
      2 => {
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
      3 => {
        if matched is Some((prev_pattern_id, _, _)) && 4 <= prev_pattern_id || matched is None {
          matched = Some((4, lexbuf.curr_pos(), []))
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
      5 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => -1
        }
      }
      6 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=109 => 8
          110 => 9
          111..=122 => 8
          _ => -1
        }
      }
      7 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=115 => 8
          116 => 10
          117..=122 => 8
          _ => -1
        }
      }
      8 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => -1
        }
      }
      9 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=99 => 8
          100 => 11
          101..=122 => 8
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
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97 => 12
          98..=122 => 8
          _ => -1
        }
      }
      11 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=111 => 8
          112 => 13
          113..=122 => 8
          _ => -1
        }
      }
      12 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=113 => 8
          114 => 14
          115..=122 => 8
          _ => -1
        }
      }
      13 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=110 => 8
          111 => 15
          112..=122 => 8
          _ => -1
        }
      }
      14 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=115 => 8
          116 => 16
          117..=122 => 8
          _ => -1
        }
      }
      15 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=114 => 8
          115 => {
            _tag_1 = lexbuf.curr_pos()
            17
          }
          116..=122 => 8
          _ => -1
        }
      }
      16 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=111 => 8
          112 => 18
          113..=122 => 8
          _ => -1
        }
      }
      17 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          40 => {
            _tag_2 = lexbuf.curr_pos()
            19
          }
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => -1
        }
      }
      18 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=110 => 8
          111 => 20
          112..=122 => 8
          _ => -1
        }
      }
      19 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          9 => {
            _tag_2 = lexbuf.curr_pos()
            22
          }
          32 => {
            _tag_2 = lexbuf.curr_pos()
            22
          }
          65..=90 => {
            _tag_3 = lexbuf.curr_pos()
            21
          }
          95 => {
            _tag_3 = lexbuf.curr_pos()
            21
          }
          97..=122 => {
            _tag_3 = lexbuf.curr_pos()
            21
          }
          _ => -1
        }
      }
      20 => {
        if matched is Some((prev_pattern_id, _, _)) && 3 <= prev_pattern_id || matched is None {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=114 => 8
          115 => {
            _tag_1 = lexbuf.curr_pos()
            23
          }
          116..=122 => 8
          _ => -1
        }
      }
      21 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          9 => 25
          32 => 25
          41 => {
            _tag_5 = lexbuf.curr_pos()
            26
          }
          48..=57 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          65..=90 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          95 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          97..=122 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          _ => -1
        }
      }
      22 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          9 => {
            _tag_2 = lexbuf.curr_pos()
            22
          }
          32 => {
            _tag_2 = lexbuf.curr_pos()
            22
          }
          65..=90 => {
            _tag_3 = lexbuf.curr_pos()
            21
          }
          95 => {
            _tag_3 = lexbuf.curr_pos()
            21
          }
          97..=122 => {
            _tag_3 = lexbuf.curr_pos()
            21
          }
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
          40 => {
            _tag_2 = lexbuf.curr_pos()
            19
          }
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => -1
        }
      }
      24 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          9 => 25
          32 => 25
          41 => {
            _tag_5 = lexbuf.curr_pos()
            26
          }
          48..=57 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          65..=90 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          95 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          97..=122 => {
            _tag_3 = lexbuf.curr_pos()
            24
          }
          _ => -1
        }
      }
      25 => {
        let c = match lexbuf.next() {
          Some(c) => c.to_int()
          None => -1
        }
        state = match c {
          9 => 25
          32 => 25
          41 => {
            _tag_5 = lexbuf.curr_pos()
            26
          }
          _ => -1
        }
      }
      26 => {
        if matched is Some((prev_pattern_id, _, _)) && 2 <= prev_pattern_id || matched is None {
          matched = Some((2, lexbuf.curr_pos(), [(_tag_0, _tag_1), (_tag_2, _tag_3), (_tag_4, _tag_5)]))
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

      scan_codeblock_rbrace(subst, lexbuf)
      scan_codeblock_rbrace(subst, lexbuf)
    
    }
    1 => {
 () 
    }
    2 => {
      let (_start_pos_of_t1, _end_pos_of_t1) = _captures[0]
      let t1 = lexbuf.sub_lexeme(_start_pos_of_t1, _end_pos_of_t1)
      let (_start_pos_of_t2, _end_pos_of_t2) = _captures[1]
      let t2 = lexbuf.sub_lexeme(_start_pos_of_t2, _end_pos_of_t2)
      let (_start_pos_of_t, _end_pos_of_t) = _captures[2]
      let t = lexbuf.sub_lexeme(_start_pos_of_t, _end_pos_of_t)
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
  let lexbuf = @lexbuf.from_string(str)
  let subst = []
  scan_codeblock_rbrace(subst, lexbuf)
  subst
}
