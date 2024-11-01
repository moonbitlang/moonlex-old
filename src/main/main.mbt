let lex_code = 
  #| {
  #|    let str_42 = b"welcome to mbtlex/count_42\nthis example is used to count 42 in str_42"
  #| }
  #|
  #| rule count_42() -> Int {
  #|   parse {
  #|     "42" => { 1 + count_42(lexbuf) }
  #|      _ => { count_42(lexbuf) }
  #|     "" => { 0 }
  #|   }
  #| }
  #|
  #| {
  #|  fn main {
  #|let lexbuf = @moonbitlang/x/lex.Lexbuf::from_bytes(str_42) // test indent
  #|    println(count_42(lexbuf))
  #|  }
  #| }

fn main {
  let parser_buf = @parser.ParserBuf::from_string(lex_code)
  guard let Some((_, lex)) = parser_buf.lex() else { _ => abort("") }
  println(@codegen.codegen_lex(lex))
}
