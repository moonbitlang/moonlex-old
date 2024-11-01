enum Edge {
  Eps
  EChar(Char)
} derive(Eq, Hash, Show)

pub struct NFA {
  graph: Array[Map[Edge, Array[Int]]] // indexed by node * char
  actions: Map[Int, Int]
  code_blocks: Array[CodeBlock]
  mut node_count: Int
} derive(Show)

fn NFA::new_nfa() -> NFA {
  { graph: [Map::new()], code_blocks: [], actions: Map::new(), node_count: 0 }
}

fn NFA::from_rule(rule: Rule) -> NFA {
  let nfa = NFA::new_nfa()
  let node = nfa.new_node() // match starting from 1
  for pattern in rule.patterns {
    nfa.register_regex(node, pattern.0, pattern.1)
  }
  nfa
}

fn new_node(self: NFA) -> Int {
  self.node_count += 1
  let new_id = self.node_count
  self.graph.push(Map::new())
  guard new_id+1 == self.graph.length()

  new_id
}

fn add_edge(self: NFA, from: Int, e: Edge, to: Int) -> Unit {
  self.graph[from].get_or_init(e, fn () { [] }).push(to)
}

fn register_regex(self: NFA, node: Int, re: Regex, code_block: CodeBlock) -> Unit {
  let final = self.register_regex_rec(node, re)
  let id = self.code_blocks.length()
  self.code_blocks.push(code_block)
  self.actions.set(final, id)
}

fn register_regex_rec(self: NFA, node: Int, re: Regex) -> Int { 
  // return the final point of re for convience in building
  match re {
    Underscore => {
      let next_node = self.new_node()
      for c = 1; c < 128; c = c + 1 {
        self.add_edge(node, EChar(Char::from_int(c)), next_node)
      }
      next_node
    }

    EOF => {
      let next_node = self.new_node()
      // eof is treated as \0 currently
      self.add_edge(node, EChar('\x00'), next_node)
      next_node
    }

    ReChar(c) => {
      let next_node = self.new_node()
      self.add_edge(node, EChar(c), next_node)
      next_node
    }
    ReStr(s) => {
      let mut next_node = node
      let mut last_node = node
      for c in s {
        next_node = self.new_node()
        self.add_edge(last_node, EChar(c), next_node)
        last_node = next_node
      } else {
        next_node
      }
    }
    CharSet(arr) => {
      let next_node = self.new_node()
      for c in arr {
        self.add_edge(node, EChar(c), next_node)
      }
      next_node
    }
    RevCharSet(arr) => {
      let next_node = self.new_node()
      for c = 0; c < 128; c = c + 1 {
        let c = Char::from_int(c)
        if not(arr.contains(c)) {
          self.add_edge(node, EChar(c), next_node)
        }
      }
      next_node
    }
    Option(re) => {
      let final = self.register_regex_rec(node, re)
      self.add_edge(node, Eps, final)
      final
    }
    Repetition(re) => {
      let final = self.register_regex_rec(node, re)
      self.add_edge(node, Eps, final)
      self.add_edge(final, Eps, node)
      final
    }
    Concat(re1, re2) => {
      let mid = self.register_regex_rec(node, re1)
      self.register_regex_rec(mid, re2)
    }
    Alter(re1, re2) => {
      let final1 = self.register_regex_rec(node, re1)
      let final2 = self.register_regex_rec(node, re2)
      let final = self.new_node()
      self.add_edge(final1, Eps, final)
      self.add_edge(final2, Eps, final)
      final
    }
    _ => abort("support regex: \{re}")
  }
}

fn get_eps_closure(self: NFA) -> Array[@immut/sorted_set.T[Int]] {
  // `+1` because 0 node is left for none
  Array::makei(self.node_count + 1, fn (x) {
    let set = Set::new()
    self.get_eps_closure_rec(x, set)
    @immut/sorted_set.T::from_array(set.to_array())
  })
}

fn get_eps_closure_rec(self: NFA, node: Int, result: Set[Int]) -> Unit {
  result.insert(node)
  for u in self.graph[node].get_or_default(Eps, []) {
    if not(result.contains(u)) {
      self.get_eps_closure_rec(u, result)
    }
  }
}
