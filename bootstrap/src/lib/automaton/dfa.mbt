pub struct DFA {
  graph: Array[Map[Char, Int]]
  actions: Map[Int, Int]
  code_blocks: Array[CodeBlock]
  mut node_count: Int
} derive(Show)

fn DFA::new(~code_blocks: Array[CodeBlock] = []) -> DFA {
  { graph: [Map::new()], code_blocks, actions: Map::new(), node_count: 0 }
}

fn DFA::new_node(self: DFA) -> Int {
  self.node_count += 1
  self.graph.push(Map::new())
  self.node_count
}

fn DFA::add_edge(self: DFA, from: Int, e: Char, to: Int) -> Unit {
  self.graph[from].set(e, to)
}

fn register_codeblock(self: DFA, nfa: NFA, node: Int, os: @immut/sorted_set.T[Int]) -> Unit {
  let actions = os.iter().map_option(fn (x) { nfa.actions.get(x) }).collect()
  
  if actions.length() > 0 {
    self.actions.set(node, actions.fold(init=actions[0], @math.minimum))
  }
}

fn DFA::from_nfa(nfa: NFA) -> DFA {
  let dfa = DFA::new(code_blocks=nfa.code_blocks)
  let eps_closure = nfa.get_eps_closure()
  let set2int = Map::new()
  let initial = eps_closure[1]
  let queue = @queue.T::from_array([initial])
  let node = dfa.new_node()
  set2int.set(initial, node)
  dfa.register_codeblock(nfa, node, initial)

  while not(queue.is_empty()) {
    let o = queue.pop().unwrap()
    let from_n = set2int.get(o).unwrap()

    let edges = @hashset.T::from_iter(o.iter().flat_map(fn (x) {
      nfa.graph[x].keys()
    }))

    for e in edges {
      match e {
        EChar(c) => {
          let next = @immut/sorted_set.T::from_iter(o.iter().flat_map(fn (x) {
            nfa.graph[x].get_or_default(e, []).iter().flat_map(fn (y) {
              eps_closure[y].iter()
            })
          }))
          let to_n = set2int.get_or_init(next, fn () { 
            let node = dfa.new_node() 
            dfa.register_codeblock(nfa, node, next)
            queue.push(next)
            node
          })
          dfa.add_edge(from_n, c, to_n)
        }
        Eps => ()
      }
    }
  }

  dfa
}

pub fn DFA::from_rule(rule: Rule) -> DFA {
  DFA::from_nfa(NFA::from_rule(rule))
}