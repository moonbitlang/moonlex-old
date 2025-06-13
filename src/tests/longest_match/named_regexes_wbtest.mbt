///|
test {
  inspect(token(Lexbuf::from_string("le")), content="ident")
  inspect(token(Lexbuf::from_string("let")), content="keyword")
  inspect(token(Lexbuf::from_string("letx")), content="keyword")
}
