///|
test (it : @test.T) {
  let lex = parse_lex_from_string!(lexer_src)
  it.writeln(@json.stringify(lex.to_json(), indent=2))
  it.snapshot!(filename="spec.json")
}
