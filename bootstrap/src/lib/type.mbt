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
} derive(Show)
