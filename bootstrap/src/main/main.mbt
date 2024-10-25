fn main {
  let parser_buf = @lib.ParserBuf::from_string("jian__ : Array[(Int, Int)])")

  println(parser_buf.var_definition())
}
