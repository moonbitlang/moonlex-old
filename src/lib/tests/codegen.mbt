let word_count_lex : String =
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
  #|   fn main {
  #|   let str = b"Hi\nWelcome to MoonbitLex\n"
  #|   let lexbuf = @x/lex.Lexbuf::from(str)
  #|   println("Word count result: \{count(lexbuf)}")
  #| }
  #| }

test "codegen word_count" (it : @test.T) {
  let parser_buf = @parser.ParserBuf::from_string(word_count_lex)
  guard let Some((_, lex)) = parser_buf.lex() else { _ => abort("") }
  it.write(@codegen.codegen_lex(lex))
  it.snapshot!(filename="word_count.mbt")
}
