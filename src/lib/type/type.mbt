pub enum Regex {
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

pub struct VarDefinition {
  identifier: String
  ty: String
} derive(Show, Eq)

pub typealias CodeBlock = String

pub struct Rule {
  name: String
  return_type: String
  vars: Array[VarDefinition]
  patterns: Array[(Regex, CodeBlock)]
} derive(Show)

pub struct Lex {
  header: CodeBlock
  rules: Array[Rule]
  trailer: CodeBlock
} derive(Show)