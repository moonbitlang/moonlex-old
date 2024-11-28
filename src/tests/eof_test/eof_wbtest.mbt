test {
  let lexbuf = Lexbuf::from_string("%%")
  let tokens = []
  while true {
    let tok = token(lexbuf)
    tokens.push(tok)
    match tok {
      EOF => { break }
      _ => ()
    }
  }
  @json.inspect!(tokens)
}