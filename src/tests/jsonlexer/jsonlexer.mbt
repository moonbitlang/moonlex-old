
priv enum Token {
  WHITESPACE
  NUMBER(String)
  STRING(String)
  LBRACE
  RBRACE
  LBRACKET
  RBRACKET
  COMMA
  COLON
  TRUE
  FALSE
  NULL
} derive(ToJson)

pub type! LexError {
  EndOfFile
  UnexpectedEndOfFile
  Unrecognized(String)
}


fn token[T](lexbuf : @lexbuf.T[T, Char, String, Int]) -> Token!LexError  {
  let mut matched = None
  let mut state = 0
  let mut _tag_0 = -1
  let mut _tag_1 = -1
  let mut _tag_2 = -1
  let mut _tag_3 = -1
  let mut _tag_4 = -1
  let mut _tag_5 = -1
  while true {
    match state {
      0 => {
        _tag_0 = lexbuf.curr_pos()
        _tag_2 = lexbuf.curr_pos()
        _tag_4 = lexbuf.curr_pos()
        if matched is (None | Some((13..<_, _, _))) {
          matched = Some((13, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          0..=8 => 1
          9..=10 => 2
          11..=12 => 1
          13 => 2
          14..=31 => 1
          32 => 2
          33 => 1
          34 => 3
          35..=43 => 1
          44 => 4
          45 => 5
          46..=47 => 1
          48 => 6
          49..=57 => 7
          58 => 8
          59..=90 => 1
          91 => 9
          92 => 1
          93 => 10
          94..=101 => 1
          102 => 11
          103..=109 => 1
          110 => 12
          111..=115 => 1
          116 => 13
          117..=122 => 1
          123 => 14
          124 => 1
          125 => 15
          126..=1114111 => 1
          _ => break
        }
      }
      1 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        break
      }
      2 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        break
      }
      3 => {
        _tag_3 = lexbuf.curr_pos()
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      4 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((7..<_, _, _))) {
          matched = Some((7, lexbuf.curr_pos(), []))
        }
        break
      }
      5 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          48 => 17
          49..=57 => 18
          _ => break
        }
      }
      6 => {
        _tag_1 = lexbuf.curr_pos()
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          69 => 19
          101 => 19
          _ => break
        }
      }
      7 => {
        _tag_1 = lexbuf.curr_pos()
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          46 => 22
          48..=57 => 18
          69 => 19
          101 => 19
          _ => break
        }
      }
      8 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((8..<_, _, _))) {
          matched = Some((8, lexbuf.curr_pos(), []))
        }
        break
      }
      9 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((5..<_, _, _))) {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        break
      }
      10 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((6..<_, _, _))) {
          matched = Some((6, lexbuf.curr_pos(), []))
        }
        break
      }
      11 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          97 => 21
          _ => break
        }
      }
      12 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          117 => 16
          _ => break
        }
      }
      13 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          114 => 20
          _ => break
        }
      }
      14 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      15 => {
        _tag_5 = lexbuf.curr_pos()
        if matched is (None | Some((4..<_, _, _))) {
          matched = Some((4, lexbuf.curr_pos(), []))
        }
        break
      }
      16 => {
        state = match lexbuf.next_as_int() {
          108 => 23
          _ => break
        }
      }
      17 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          69 => 19
          101 => 19
          _ => break
        }
      }
      18 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          46 => 22
          48..=57 => 18
          69 => 19
          101 => 19
          _ => break
        }
      }
      19 => {
        state = match lexbuf.next_as_int() {
          43 => 24
          45 => 24
          48..=57 => 25
          _ => break
        }
      }
      20 => {
        state = match lexbuf.next_as_int() {
          117 => 26
          _ => break
        }
      }
      21 => {
        state = match lexbuf.next_as_int() {
          108 => 27
          _ => break
        }
      }
      22 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 28
          _ => break
        }
      }
      23 => {
        state = match lexbuf.next_as_int() {
          108 => 29
          _ => break
        }
      }
      24 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 25
          _ => break
        }
      }
      25 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 25
          _ => break
        }
      }
      26 => {
        state = match lexbuf.next_as_int() {
          101 => 30
          _ => break
        }
      }
      27 => {
        state = match lexbuf.next_as_int() {
          115 => 31
          _ => break
        }
      }
      28 => {
        _tag_1 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => 28
          69 => 19
          101 => 19
          _ => break
        }
      }
      29 => {
        if matched is (None | Some((11..<_, _, _))) {
          matched = Some((11, lexbuf.curr_pos(), []))
        }
        break
      }
      30 => {
        if matched is (None | Some((9..<_, _, _))) {
          matched = Some((9, lexbuf.curr_pos(), []))
        }
        break
      }
      31 => {
        state = match lexbuf.next_as_int() {
          101 => 32
          _ => break
        }
      }
      32 => {
        if matched is (None | Some((10..<_, _, _))) {
          matched = Some((10, lexbuf.curr_pos(), []))
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
 WHITESPACE 
    }
    1 => {
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.get_string(_start_pos_of_t, _end_pos_of_t)
 NUMBER(t) 
    }
    2 => {
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.get_char(_start_pos_of_t, _end_pos_of_t)

      let buf = StringBuilder::new()
      buf.write_char(t)
      lex_string!(buf, lexbuf)
      STRING(buf.to_string())
    
    }
    3 => {
 LBRACE 
    }
    4 => {
 RBRACE 
    }
    5 => {
 LBRACKET 
    }
    6 => {
 RBRACKET 
    }
    7 => {
 COMMA 
    }
    8 => {
 COLON 
    }
    9 => {
 TRUE 
    }
    10 => {
 FALSE 
    }
    11 => {
 NULL 
    }
    12 => {
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.get_char(_start_pos_of_t, _end_pos_of_t)
 raise(Unrecognized(String::make(1, t))) 
    }
    13 => {
 raise(EndOfFile) 
    }
    _ => panic()
  }
}


fn lex_string[T](buf : StringBuilder, lexbuf : @lexbuf.T[T, Char, String, Int]) -> Unit!LexError  {
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
  while true {
    match state {
      0 => {
        _tag_0 = lexbuf.curr_pos()
        _tag_2 = lexbuf.curr_pos()
        _tag_4 = lexbuf.curr_pos()
        _tag_6 = lexbuf.curr_pos()
        if matched is (None | Some((4..<_, _, _))) {
          matched = Some((4, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          0..=31 => 1
          32..=33 => 2
          34 => 3
          35..=91 => 2
          92 => 4
          93..=126 => 2
          127 => 1
          128..=1114111 => 2
          _ => break
        }
      }
      1 => {
        _tag_7 = lexbuf.curr_pos()
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), [(_tag_6, _tag_7)]))
        }
        break
      }
      2 => {
        _tag_5 = lexbuf.curr_pos()
        _tag_7 = lexbuf.curr_pos()
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        break
      }
      3 => {
        _tag_1 = lexbuf.curr_pos()
        _tag_7 = lexbuf.curr_pos()
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        break
      }
      4 => {
        _tag_7 = lexbuf.curr_pos()
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), [(_tag_6, _tag_7)]))
        }
        state = match lexbuf.next_as_int() {
          34 => 5
          47 => 5
          92 => 5
          98 => 5
          102 => 5
          110 => 5
          114 => 5
          116 => 5
          117 => 6
          _ => break
        }
      }
      5 => {
        _tag_3 = lexbuf.curr_pos()
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      6 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 7
          65..=70 => 7
          97..=102 => 7
          _ => break
        }
      }
      7 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 8
          65..=70 => 8
          97..=102 => 8
          _ => break
        }
      }
      8 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 9
          65..=70 => 9
          97..=102 => 9
          _ => break
        }
      }
      9 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 5
          65..=70 => 5
          97..=102 => 5
          _ => break
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
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.get_char(_start_pos_of_t, _end_pos_of_t)
 buf.write_char(t) 
    }
    1 => {
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.get_string(_start_pos_of_t, _end_pos_of_t)
 
      buf.write_string(t)
      lex_string!(buf, lexbuf)
    
    }
    2 => {
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.get_char(_start_pos_of_t, _end_pos_of_t)
 
      buf.write_char(t)
      lex_string!(buf, lexbuf)
    
    }
    3 => {
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.get_char(_start_pos_of_t, _end_pos_of_t)
 raise(Unrecognized(String::make(1, t))) 
    }
    4 => {
 raise(UnexpectedEndOfFile) 
    }
    _ => panic()
  }
}




