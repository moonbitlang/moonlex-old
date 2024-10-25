enum Regex {
  Underscore
  EOF
  ReStr(String)
  ReChar(Char)
  CharSet(Array[Char])
  RevCharSet(Array[Char])
  Repetition(Regex)
  Option(Regex)
  Alter(Regex, Regex)
  Concat(Regex, Regex)
  Capture(Regex, String)
} derive(Show, Eq)

struct VarDefinition {
  identifier: String
  ty: String
} derive(Show, Eq)

struct Rule {
  re: Regex
  code_block: String
}

struct Lex {
  vars: Array[VarDefinition]
  rules: Array[Rule]
}