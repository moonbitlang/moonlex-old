fn simple_rule(re_str: String) -> @type.Rule {
  let parser_buf = @parser.ParserBuf::from_string(re_str)
  guard let Some((_, re)) = parser_buf.regex() else { _ => abort("") }
  { name: "", return_type: "", vars: [], patterns: [(re, "")] }
}

fn nfa2dots(nfa: @automaton.NFA, ~name: String="nfa") -> DotGraph {
  let dots = DotGraph::new(name=name)
  for node, edges in nfa.graph {
    for edge in edges {
      let (ch, targets) = edge
      for target in targets {
        let mut edge_info = match ch {
          EChar(c) => "\{c}"
          Eps => "ε"
        }
        if not(target.1.is_empty()) {
          edge_info = edge_info + "/\{target.1.unwrap()}"
        }
        dots.add_edge(from=node, to=target.0, edge_info="\"\{edge_info}\"")
      }
    }
  }
  for end_node in nfa.end_nodes {
    let (node, pattern) = end_node
    dots.set_dot(dot=node, key="shape", value="box")
    dots.set_dot(dot=node, key="label", value="\"\{node}(\{pattern})\"")
  }
  dots
}

test "nfa simple_regex" (it: @test.T) {
  let rule = simple_rule("(('a' | 'b')*\"cd\"?)+")
  let nfa = @automaton.NFA::from_rule(rule)
  let dots = nfa2dots(nfa, name="simple_regex")
  it.writeln(dots.to_dotfile())
  it.snapshot!(filename="nfa_simple_regex.dot")
}

test "nfa a_star_capture" (it: @test.T) {
  let rule = simple_rule("'a'*('a'+ as cap)'a'")
  let nfa = @automaton.NFA::from_rule(rule)
  let dots = nfa2dots(nfa, name="a_star_capture")
  it.writeln(dots.to_dotfile())
  it.snapshot!(filename="nfa_a_star_capture.dot")
}

fn dfa2dots(dfa: @automaton.DFA, ~name: String="dfa") -> DotGraph {
  let dots = DotGraph::new(name=name)
  for node, edges in dfa.graph {
    for edge in edges {
      let (ch, (target, action)) = edge
      let mut edge_info = "\{ch}"
      if action._.length() != 0 {
        edge_info = edge_info + "\{action._}"
      }
      dots.add_edge(from=node, to=target, edge_info="\"\{edge_info}\"")
    }
  }
  for end_node in dfa.end_nodes {
    let (node, (pattern, tags)) = end_node
    let mut label = "\{node}(\{pattern})"
    if tags.length() != 0 {
      label = label + "/\{tags}"
    }
    dots.set_dot(dot=node, key="shape", value="box")
    dots.set_dot(dot=node, key="label", value="\"\{label}\"")
  }
  dots
}

test "dfa simple_regex" (it: @test.T) {
  let rule = simple_rule("(('a' | 'b')*\"cd\"?)+")
  let dfa = @automaton.DFA::from_rule(rule)
  let dots = dfa2dots(dfa, name="simple_regex")
  it.writeln(dots.to_dotfile())
  it.snapshot!(filename="dfa_simple_regex.dot")
}

test "nfa a_star_capture" (it: @test.T) {
  let rule = simple_rule("'a'*('a'+ as cap)'a'")
  let dfa = @automaton.DFA::from_rule(rule)
  let dots = dfa2dots(dfa, name="a_star_capture")
  it.writeln(dots.to_dotfile())
  it.snapshot!(filename="dfa_a_star_capture.dot")
}