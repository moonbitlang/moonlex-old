fn main {
  let parser_buf = @lib.ParserBuf::from_string("{asdsad {\"}\"} asdas {xx}} xxx")

  println(parser_buf.code_block())
}
