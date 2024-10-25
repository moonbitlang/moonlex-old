fn main {
  let parser_buf = @lib.ParserBuf::from_string("[^ 'a' 'b'-'z' 'X']* | (['a' 'b'] \"asd\"?)| \"asd\"")

  println(parser_buf.regex())
}
