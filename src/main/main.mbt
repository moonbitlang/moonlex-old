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
  #|   fn main {
  #|   let str = b"Hi\nWelcome to MoonbitLex\n"
  #|   let lexbuf = Lexbuf::from(str)
  #|   println("Word count result: \{count(lexbuf)}")
  #| }
  #| }

fn main {
  let parser_buf = @parser.ParserBuf::from_string(lex_code)
  guard let Some((_, lex)) = parser_buf.lex() else { _ => abort("") }
  println(@codegen.codegen_lex(lex))
}
