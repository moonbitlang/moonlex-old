///|
struct Lexbuf {
  content : String
  mut pos : Int
}

///|
pub fn Lexbuf::from_string(content : String) -> Lexbuf {
  { content, pos: 0 }
}

// NOTE: MoonBit do have unboxed Option[Char] optimization

///|
fn Lexbuf::next(self : Lexbuf) -> Char? {
  if self.pos < self.content.length() {
    let ch = self.content[self.pos]
    self.pos += 1
    Some(ch.unsafe_to_char())
  } else {
    None
  }
}

///|
fn Lexbuf::substring(self : Lexbuf, start : Int, end : Int) -> String {
  (try! self.content[start:end]).to_string()
}

///|
type LexTagAction = Array[Array[Int]]

///|
type LexState = Int

///|
type LexInput = Int

///|
pub(all) struct LexEngine {
  graph : Array[(LexState) -> (LexState, LexTagAction)]
  end_nodes : Array[(Int, Array[((Int, Int), (Int, Int))])?]
  start_tags : Array[Int]
  code_blocks_n : Int
}

///|
pub fn LexEngine::run(
  self : LexEngine,
  lexbuf : Lexbuf,
) -> (Int, Array[(Int, Int)]) {
  let mut state = 0
  let mut tagState : Array[Array[Int]] = []
  let mut longest_match = None
  for tag in self.start_tags {
    while tagState.length() <= tag {
      tagState.push([])
    }
    tagState[tag].push(lexbuf.pos)
  }
  while state != -1 {
    match self.end_nodes[state] {
      Some(t) => longest_match = Some((t.0, lexbuf.pos, state, tagState))
      _ => ()
    }
    let b = match lexbuf.next() {
      Some(b) => b.to_int()
      None => -1
    }
    let next = self.graph[state](b)
    state = next.0
    let new_tagState : Array[Array[Int]] = []
    for i = 0; i < next.1.length(); i = i + 1 {
      new_tagState.push([])
      for j = 0; j < next.1[i].length(); j = j + 1 {
        let t = next.1[i][j]
        if t == -1 {
          new_tagState[i].push(lexbuf.pos)
        } else {
          new_tagState[i].push(tagState[i][t])
        }
      }
    }
    tagState = new_tagState
  }
  match longest_match {
    None => (self.code_blocks_n, [])
    Some((index, pos, state, tagState)) => {
      lexbuf.pos = pos
      let captures = self.end_nodes[state].unwrap().1.map(fn(it) {
        let ((b_t, b_r), (e_t, e_r)) = it
        (tagState[b_t][b_r], tagState[e_t][e_r])
      })
      (index, captures)
    }
  }
}





let token_tag_action_0 : Array[Array[Int]] = []

fn token_state_0(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    65..=90 => (1, token_tag_action_0)
    95 => (1, token_tag_action_0)
    97..=107 => (1, token_tag_action_0)
    108 => (2, token_tag_action_0)
    109..=122 => (1, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_1(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (3, token_tag_action_0)
    65..=90 => (3, token_tag_action_0)
    95 => (3, token_tag_action_0)
    97..=122 => (3, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_2(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (3, token_tag_action_0)
    65..=90 => (3, token_tag_action_0)
    95 => (3, token_tag_action_0)
    97..=100 => (3, token_tag_action_0)
    101 => (4, token_tag_action_0)
    102..=122 => (3, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_3(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (3, token_tag_action_0)
    65..=90 => (3, token_tag_action_0)
    95 => (3, token_tag_action_0)
    97..=122 => (3, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_4(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (3, token_tag_action_0)
    65..=90 => (3, token_tag_action_0)
    95 => (3, token_tag_action_0)
    97..=115 => (3, token_tag_action_0)
    116 => (5, token_tag_action_0)
    117..=122 => (3, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_5(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (3, token_tag_action_0)
    65..=90 => (3, token_tag_action_0)
    95 => (3, token_tag_action_0)
    97..=122 => (3, token_tag_action_0)
    _ => (-1, [])
  }
}

let __mbtlex_engine_token: LexEngine = { graph: [token_state_0, token_state_1, token_state_2, token_state_3, token_state_4, token_state_5, ], end_nodes: [None, Some((1, [])), Some((1, [])), Some((1, [])), Some((1, [])), Some((0, []))], start_tags: [], code_blocks_n: 2 }
fn token( lexbuf : Lexbuf ) -> String {
  match __mbtlex_engine_token.run(lexbuf) {
    (0, __mbtlex_captures) => {
 "keyword" 
    }
    (1, __mbtlex_captures) => {
 "ident" 
    }
    _ => abort("lex: fail to match")
  }
}


