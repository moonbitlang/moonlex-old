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

typealias CodeBlock = String

struct Rule {
  name: String
  vars: Array[VarDefinition]
  patterns: Array[(Regex, CodeBlock)]
} derive(Show)

struct Lex {
  header: CodeBlock
  rules: Array[Rule]
  trailer: CodeBlock
} derive(Show)