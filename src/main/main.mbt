let lex_code = 
  #| {
  #| }
  #|
  #| rule count_42() -> Int {
  #|   parse {
  #|     ("a"*)((("a")+) as cap)'a' => {}
  #|   }
  #| }
  #|
  #| {
  #| }

fn main {
  let parser_buf = @parser.ParserBuf::from_string(lex_code)
  guard let Some((_, lex)) = parser_buf.lex() else { _ => abort("") }
  for rule in lex.rules {
    println(rule)
    println(@automaton.from_rule(rule))
  }
}
