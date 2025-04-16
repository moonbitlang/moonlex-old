
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
  while true {
    match state {
      0 => {
        if matched is (None | Some((5..<_, _, _))) {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
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
          _ => break
        }
      }
      1 => {
        if matched is (None | Some((4..<_, _, _))) {
          matched = Some((4, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
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
      2 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        break
      }
      3 => {
        if matched is (None | Some((4..<_, _, _))) {
          matched = Some((4, lexbuf.curr_pos(), []))
        }
        break
      }
      4 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), []))
        }
        break
      }
      5 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => break
        }
      }
      6 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=109 => 8
          110 => 9
          111..=122 => 8
          _ => break
        }
      }
      7 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=115 => 8
          116 => 10
          117..=122 => 8
          _ => break
        }
      }
      8 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => break
        }
      }
      9 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=99 => 8
          100 => 11
          101..=122 => 8
          _ => break
        }
      }
      10 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97 => 12
          98..=122 => 8
          _ => break
        }
      }
      11 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=111 => 8
          112 => 13
          113..=122 => 8
          _ => break
        }
      }
      12 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=113 => 8
          114 => 14
          115..=122 => 8
          _ => break
        }
      }
      13 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=110 => 8
          111 => 15
          112..=122 => 8
          _ => break
        }
      }
      14 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=115 => 8
          116 => 16
          117..=122 => 8
          _ => break
        }
      }
      15 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=114 => 8
          115 => {
            _tag_1 = lexbuf.curr_pos()
            17
          }
          116..=122 => 8
          _ => break
        }
      }
      16 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=111 => 8
          112 => 18
          113..=122 => 8
          _ => break
        }
      }
      17 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          40 => {
            _tag_2 = lexbuf.curr_pos()
            19
          }
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => break
        }
      }
      18 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=110 => 8
          111 => 20
          112..=122 => 8
          _ => break
        }
      }
      19 => {
        state = match lexbuf.next_as_int() {
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
          _ => break
        }
      }
      20 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=114 => 8
          115 => {
            _tag_1 = lexbuf.curr_pos()
            23
          }
          116..=122 => 8
          _ => break
        }
      }
      21 => {
        state = match lexbuf.next_as_int() {
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
          _ => break
        }
      }
      22 => {
        state = match lexbuf.next_as_int() {
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
          _ => break
        }
      }
      23 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          40 => {
            _tag_2 = lexbuf.curr_pos()
            19
          }
          48..=57 => 8
          65..=90 => 8
          95 => 8
          97..=122 => 8
          _ => break
        }
      }
      24 => {
        state = match lexbuf.next_as_int() {
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
          _ => break
        }
      }
      25 => {
        state = match lexbuf.next_as_int() {
          9 => 25
          32 => 25
          41 => {
            _tag_5 = lexbuf.curr_pos()
            26
          }
          _ => break
        }
      }
      26 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), [(_tag_0, _tag_1), (_tag_2, _tag_3), (_tag_4, _tag_5)]))
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
