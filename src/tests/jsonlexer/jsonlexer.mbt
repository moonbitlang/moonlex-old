
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
  _tag_0 = lexbuf.curr_pos()
  _tag_2 = lexbuf.curr_pos()
  _tag_4 = lexbuf.curr_pos()
  while true {
    match state {
      0 => {
        if matched is (None | Some((13..<_, _, _))) {
          matched = Some((13, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          0..=8 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          9..=10 => {
            _tag_5 = lexbuf.curr_pos()
            8
          }
          11..=12 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          13 => {
            _tag_5 = lexbuf.curr_pos()
            8
          }
          14..=31 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          32 => {
            _tag_5 = lexbuf.curr_pos()
            8
          }
          33 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          34 => {
            _tag_3 = lexbuf.curr_pos()
            _tag_5 = lexbuf.curr_pos()
            11
          }
          35..=43 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          44 => {
            _tag_5 = lexbuf.curr_pos()
            12
          }
          45 => {
            _tag_5 = lexbuf.curr_pos()
            3
          }
          46..=47 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          48 => {
            _tag_1 = lexbuf.curr_pos()
            _tag_5 = lexbuf.curr_pos()
            4
          }
          49..=57 => {
            _tag_1 = lexbuf.curr_pos()
            _tag_5 = lexbuf.curr_pos()
            15
          }
          58 => {
            _tag_5 = lexbuf.curr_pos()
            5
          }
          59..=90 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          91 => {
            _tag_5 = lexbuf.curr_pos()
            14
          }
          92 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          93 => {
            _tag_5 = lexbuf.curr_pos()
            10
          }
          94..=101 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          102 => {
            _tag_5 = lexbuf.curr_pos()
            9
          }
          103..=109 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          110 => {
            _tag_5 = lexbuf.curr_pos()
            1
          }
          111..=115 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          116 => {
            _tag_5 = lexbuf.curr_pos()
            7
          }
          117..=122 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          123 => {
            _tag_5 = lexbuf.curr_pos()
            6
          }
          124 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          125 => {
            _tag_5 = lexbuf.curr_pos()
            2
          }
          126..=1114111 => {
            _tag_5 = lexbuf.curr_pos()
            13
          }
          _ => break
        }
      }
      1 => {
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          117 => 16
          _ => break
        }
      }
      2 => {
        if matched is (None | Some((4..<_, _, _))) {
          matched = Some((4, lexbuf.curr_pos(), []))
        }
        break
      }
      3 => {
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          48 => {
            _tag_1 = lexbuf.curr_pos()
            17
          }
          49..=57 => {
            _tag_1 = lexbuf.curr_pos()
            18
          }
          _ => break
        }
      }
      4 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          69 => 19
          101 => 19
          _ => break
        }
      }
      5 => {
        if matched is (None | Some((8..<_, _, _))) {
          matched = Some((8, lexbuf.curr_pos(), []))
        }
        break
      }
      6 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), []))
        }
        break
      }
      7 => {
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          114 => 20
          _ => break
        }
      }
      8 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), []))
        }
        break
      }
      9 => {
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        state = match lexbuf.next_as_int() {
          97 => 21
          _ => break
        }
      }
      10 => {
        if matched is (None | Some((6..<_, _, _))) {
          matched = Some((6, lexbuf.curr_pos(), []))
        }
        break
      }
      11 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      12 => {
        if matched is (None | Some((7..<_, _, _))) {
          matched = Some((7, lexbuf.curr_pos(), []))
        }
        break
      }
      13 => {
        if matched is (None | Some((12..<_, _, _))) {
          matched = Some((12, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        break
      }
      14 => {
        if matched is (None | Some((5..<_, _, _))) {
          matched = Some((5, lexbuf.curr_pos(), []))
        }
        break
      }
      15 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          46 => 23
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            22
          }
          69 => 19
          101 => 19
          _ => break
        }
      }
      16 => {
        state = match lexbuf.next_as_int() {
          108 => 24
          _ => break
        }
      }
      17 => {
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
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          46 => 23
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            22
          }
          69 => 19
          101 => 19
          _ => break
        }
      }
      19 => {
        state = match lexbuf.next_as_int() {
          43 => 26
          45 => 26
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            25
          }
          _ => break
        }
      }
      20 => {
        state = match lexbuf.next_as_int() {
          117 => 27
          _ => break
        }
      }
      21 => {
        state = match lexbuf.next_as_int() {
          108 => 28
          _ => break
        }
      }
      22 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          46 => 23
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            22
          }
          69 => 19
          101 => 19
          _ => break
        }
      }
      23 => {
        state = match lexbuf.next_as_int() {
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            29
          }
          _ => break
        }
      }
      24 => {
        state = match lexbuf.next_as_int() {
          108 => 30
          _ => break
        }
      }
      25 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            25
          }
          _ => break
        }
      }
      26 => {
        state = match lexbuf.next_as_int() {
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            25
          }
          _ => break
        }
      }
      27 => {
        state = match lexbuf.next_as_int() {
          101 => 31
          _ => break
        }
      }
      28 => {
        state = match lexbuf.next_as_int() {
          115 => 32
          _ => break
        }
      }
      29 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        state = match lexbuf.next_as_int() {
          48..=57 => {
            _tag_1 = lexbuf.curr_pos()
            29
          }
          69 => 19
          101 => 19
          _ => break
        }
      }
      30 => {
        if matched is (None | Some((11..<_, _, _))) {
          matched = Some((11, lexbuf.curr_pos(), []))
        }
        break
      }
      31 => {
        if matched is (None | Some((9..<_, _, _))) {
          matched = Some((9, lexbuf.curr_pos(), []))
        }
        break
      }
      32 => {
        state = match lexbuf.next_as_int() {
          101 => 33
          _ => break
        }
      }
      33 => {
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
      let t = lexbuf.sub_lexeme(_start_pos_of_t, _end_pos_of_t)
 NUMBER(t) 
    }
    2 => {
      let _start_pos_of_t = _captures[0].0
      let t = lexbuf.unsafe_get(_start_pos_of_t)

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
      let _start_pos_of_t = _captures[0].0
      let t = lexbuf.unsafe_get(_start_pos_of_t)
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
  _tag_0 = lexbuf.curr_pos()
  _tag_2 = lexbuf.curr_pos()
  _tag_4 = lexbuf.curr_pos()
  _tag_6 = lexbuf.curr_pos()
  while true {
    match state {
      0 => {
        if matched is (None | Some((4..<_, _, _))) {
          matched = Some((4, lexbuf.curr_pos(), []))
        }
        state = match lexbuf.next_as_int() {
          0..=31 => {
            _tag_7 = lexbuf.curr_pos()
            2
          }
          32..=33 => {
            _tag_5 = lexbuf.curr_pos()
            _tag_7 = lexbuf.curr_pos()
            1
          }
          34 => {
            _tag_1 = lexbuf.curr_pos()
            _tag_7 = lexbuf.curr_pos()
            4
          }
          35..=91 => {
            _tag_5 = lexbuf.curr_pos()
            _tag_7 = lexbuf.curr_pos()
            1
          }
          92 => {
            _tag_7 = lexbuf.curr_pos()
            3
          }
          93..=126 => {
            _tag_5 = lexbuf.curr_pos()
            _tag_7 = lexbuf.curr_pos()
            1
          }
          127 => {
            _tag_7 = lexbuf.curr_pos()
            2
          }
          128..=1114111 => {
            _tag_5 = lexbuf.curr_pos()
            _tag_7 = lexbuf.curr_pos()
            1
          }
          _ => break
        }
      }
      1 => {
        if matched is (None | Some((2..<_, _, _))) {
          matched = Some((2, lexbuf.curr_pos(), [(_tag_4, _tag_5)]))
        }
        break
      }
      2 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), [(_tag_6, _tag_7)]))
        }
        break
      }
      3 => {
        if matched is (None | Some((3..<_, _, _))) {
          matched = Some((3, lexbuf.curr_pos(), [(_tag_6, _tag_7)]))
        }
        state = match lexbuf.next_as_int() {
          34 => {
            _tag_3 = lexbuf.curr_pos()
            11
          }
          47 => {
            _tag_3 = lexbuf.curr_pos()
            12
          }
          92 => {
            _tag_3 = lexbuf.curr_pos()
            8
          }
          98 => {
            _tag_3 = lexbuf.curr_pos()
            13
          }
          102 => {
            _tag_3 = lexbuf.curr_pos()
            9
          }
          110 => {
            _tag_3 = lexbuf.curr_pos()
            10
          }
          114 => {
            _tag_3 = lexbuf.curr_pos()
            5
          }
          116 => {
            _tag_3 = lexbuf.curr_pos()
            6
          }
          117 => 7
          _ => break
        }
      }
      4 => {
        if matched is (None | Some((0..<_, _, _))) {
          matched = Some((0, lexbuf.curr_pos(), [(_tag_0, _tag_1)]))
        }
        break
      }
      5 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      6 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      7 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 14
          65..=70 => 14
          97..=102 => 14
          _ => break
        }
      }
      8 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      9 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      10 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      11 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      12 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      13 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
        }
        break
      }
      14 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 15
          65..=70 => 15
          97..=102 => 15
          _ => break
        }
      }
      15 => {
        state = match lexbuf.next_as_int() {
          48..=57 => 16
          65..=70 => 16
          97..=102 => 16
          _ => break
        }
      }
      16 => {
        state = match lexbuf.next_as_int() {
          48..=57 => {
            _tag_3 = lexbuf.curr_pos()
            17
          }
          65..=70 => {
            _tag_3 = lexbuf.curr_pos()
            17
          }
          97..=102 => {
            _tag_3 = lexbuf.curr_pos()
            17
          }
          _ => break
        }
      }
      17 => {
        if matched is (None | Some((1..<_, _, _))) {
          matched = Some((1, lexbuf.curr_pos(), [(_tag_2, _tag_3)]))
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
      let _start_pos_of_t = _captures[0].0
      let t = lexbuf.unsafe_get(_start_pos_of_t)
 buf.write_char(t) 
    }
    1 => {
      let (_start_pos_of_t, _end_pos_of_t) = _captures[0]
      let t = lexbuf.sub_lexeme(_start_pos_of_t, _end_pos_of_t)
 
      buf.write_string(t)
      lex_string!(buf, lexbuf)
    
    }
    2 => {
      let _start_pos_of_t = _captures[0].0
      let t = lexbuf.unsafe_get(_start_pos_of_t)
 
      buf.write_char(t)
      lex_string!(buf, lexbuf)
    
    }
    3 => {
      let _start_pos_of_t = _captures[0].0
      let t = lexbuf.unsafe_get(_start_pos_of_t)
 raise(Unrecognized(String::make(1, t))) 
    }
    4 => {
 raise(UnexpectedEndOfFile) 
    }
    _ => panic()
  }
}




