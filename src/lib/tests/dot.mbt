type Edge (Int, Int, String) // from, to, edge_info

pub struct DotGraph {
  edges: Array[Edge]
  dots: Map[Int, Array[(String, String)]]
  name: String
}

pub fn DotGraph::new(~name: String="graph") -> DotGraph {
  { edges: [], dots: Map::new(), name }
}

pub fn add_edge(
  self: DotGraph, 
  ~from: Int, 
  ~to: Int, 
  ~edge_info: String=""
) -> Unit {
  self.edges.push((from, to, edge_info))
}

fn to_dotfile(self: DotGraph) -> String {
  [
    "digraph \{self.name} {",
    self.edges.map(fn (e) {
      let (from, to, info) = e._
      "\t\{from} -> \{to}[label=\{info}]"
    }) |> String::concat(separator="\n"),
    self.dots.iter().map(fn { (dot, key_values) => {
      [
        dot.to_string(), "[", 
        key_values.map(fn { (key, value) => {
          "\{key}=\{value}"
        } }) |> String::concat(separator=", "),
        "]"
      ] |> String::concat()
    } }).collect() |> String::concat(separator="\n"),
    "}"
  ] |> String::concat()
}

fn set_dot(self: DotGraph, ~dot: Int, ~key: String, ~value: String) -> Unit {
  self.dots.get_or_init(dot, fn () { [] }).push((key, value))
}