fn main {
  let rule: @type.Rule = { 
    name: "rule", 
    vars: [], 
    patterns: [
      (@type.Concat(
        @type.ReChar('a'), 
        @type.Concat(
          @type.Repetition(@type.ReChar('b')),
          @type.ReChar('a'))), "code1"),
      (@type.Concat(
        @type.ReChar('a'), 
        @type.Concat(
          @type.Repetition(@type.ReChar('c')),
          @type.ReChar('a'))), "code2"),
    ] 
  }

  let nfa = @automaton.NFA::from_rule(rule)
  println(nfa)

  let dfa = @automaton.DFA::from_nfa(nfa)
  println(dfa)
}
