let lex_code = 
  #| {
  #| // translate from https://ohama.github.io/ocaml/ocamllex-tutorial/examples/wordcount/
  #| }

  #| rule count(lines : Int, words : Int, chars : Int) {
  #|  parse {
  #|    '\n' => { count(lines + 1, words, chars + 1, lexbuf) }
  #|    [^ ' ' '\t' '\n' ]+ as word => {
  #|      let new_chars = chars + word.length
  #|      count(lines, words + 1, new_chars, lexbuf)
  #|    }
  #|    _ => { count(lines, words, chars + 1, lexbuf) }
  #|    eof => { (lines, words, chars) }
  #|  }
  #| }

  #| {
  #|  fn main {
  #|    let str = "Hi\nWelcome to MoonbitLex\n"
  #|    let lexbuf = Lexing.from_string(str)
  #|    println("Word count result: \{count(lexbuf)}")
  #|  }
  #| }

fn main {
  let parser_buf = @lib.ParserBuf::from_string(lex_code)

  println(parser_buf.lex())
}
