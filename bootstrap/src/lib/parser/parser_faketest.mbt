test "parse regex" {
  let parser_buf = ParserBuf::from_string("(\"x\"*|'\"'+) ['a'- 'z' '_' ] [^ 'a' 'b'] eof  ")

  let result = parser_buf.regex().map(fn { (_, r) => r })
  let correct: Regex? = Some(Concat(Concat(Concat(Alter(Repetition(ReStr("x")), Concat(ReChar('"'), Repetition(ReChar('"')))), CharSet([ch_range('a', 'z'), ['_']].flatten())), RevCharSet(['a', 'b'])), EOF))

  if result != correct {
    fail!("parse regex fail")
  }
}

test "parse var_definition" {
  let parser_buf = ParserBuf::from_string("jian123___ : Array[(Int, Array[B, C])])")

  let result = parser_buf.var_definition().map(fn { (_, r) => r })
  let correct: VarDefinition? = Some({ identifier: "jian123___", ty: " Array[(Int, Array[B, C])]" })

  if result != correct {
    fail!("parse var_definition fail")
  }
}

test "parse codeblock" {
  let parser_buf = ParserBuf::from_string("{asdsad {\"}\"} asdas {xx}} xxx")

  let result = parser_buf.code_block().map(fn { (_, r) => r })
  let correct = Some("{asdsad {\"}\"} asdas {xx}}")

  if result != correct {
    fail!("parse codeblock fail")
  }
}
