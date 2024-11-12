let lex_code =
  #| {
  #| // translate from https://ohama.github.io/ocaml/ocamllex-tutorial/examples/wordcount/
  #| }
  #| rule count(lines : Int, words : Int, chars : Int) -> (Int, Int, Int) {
  #| parse {
  #|   '\n' => { count(lines + 1, words, chars + 1, lexbuf) }
  #|   [^ ' ' '\t' '\n' ]+ as word => {
  #|     let new_chars = chars + word.length()
  #|     count(lines, words + 1, new_chars, lexbuf)
  #|   }
  #|   _ => { count(lines, words, chars + 1, lexbuf) }
  #|   "" => { (lines, words, chars) }
  #| }
  #| }
  #| {
  #| test {
  #|   let str = "Hi\nWelcome to MoonbitLex\n"
  #|   let lexbuf = Lexbuf::from_string(str)
  #|   inspect!(count(0, 0, 0, lexbuf), content="(2, 4, 25)")
  #| }
  #| }

test (it : @test.T) {
  let parser_buf = @parser.ParserBuf::from_string(lex_code)
  guard let Some((_, lex)) = parser_buf.lex() else { _ => abort("") }
  it.write(@codegen.codegen_lex(lex))
  it.snapshot!(filename="lexer_test.mbt.inc")
}
