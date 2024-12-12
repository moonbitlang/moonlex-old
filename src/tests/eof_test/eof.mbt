
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
fn next(self : Lexbuf) -> Char? {
   if self.pos < self.content.length() {
     let ch = self.content[self.pos]
     self.pos += 1
     Some(ch)
   } else {
     None
   }
 }

///|
fn substring(self : Lexbuf, start : Int, end : Int) -> String {
   self.content.substring(start~, end~)
 }

///|
typealias TagAction = Array[Array[Int]]

///|
typealias State = Int

///|
typealias Input = Int

///|
pub(all) struct Engine {
   graph : Array[(State) -> (State, TagAction)]
   end_nodes : Array[(Int, Array[((Int, Int), (Int, Int))])?]
   start_tags : Array[Int]
   code_blocks_n : Int
 }

///|
pub fn run(self : Engine, lexbuf : Lexbuf) -> (Int, Array[(Int, Int)]) {
   let mut state = 1
   let mut tagState : Array[Array[Int]] = []
   let backtrace = Array::make(self.code_blocks_n, None)
   for tag in self.start_tags {
     while tagState.length() <= tag {
       tagState.push([])
     }
     tagState[tag].push(lexbuf.pos)
   }
   while state != 0 {
     match self.end_nodes[state] {
       Some(t) => backtrace[t.0] = Some((lexbuf.pos, state, tagState))
       _ => ()
     }
     let b = match lexbuf.next() {
       Some(b) => b
       None => '\x00'
     }
     let next = self.graph[state](b.to_int())
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
   for index, b in backtrace {
     match b {
       Some((p, state, tagState)) => {
         lexbuf.pos = p
         let captures = self.end_nodes[state].unwrap().1.map(
           fn {
             ((b_t, b_r), (e_t, e_r)) => (tagState[b_t][b_r], tagState[e_t][e_r])
           },
         )
         break (index, captures)
       }
       None => ()
     }
   } else {
     (self.code_blocks_n, [])
   }
 }



enum Token {
   PERCENT
   PERCENT_EOF
   NON_PERCENT
   EOF
 } derive(ToJson)


let token_tag_action_0 : Array[Array[Int]] = []

fn token_state_0(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn token_state_1(input : Input) -> (State, TagAction) {
   match input {
     0 => (4, token_tag_action_0)
     1..=36 => (3, token_tag_action_0)
     37 => (2, token_tag_action_0)
     38..=127 => (3, token_tag_action_0)
     _ => panic()
   }
 }
fn token_state_2(input : Input) -> (State, TagAction) {
   match input {
     0 => (5, token_tag_action_0)
     _ => (0, [])
   }
 }
fn token_state_3(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn token_state_4(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn token_state_5(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }

let __mbtlex_engine_token: Engine = { graph: [token_state_0, token_state_1, token_state_2, token_state_3, token_state_4, token_state_5, ], end_nodes: [None, None, Some((1, [])), Some((2, [])), Some((3, [])), Some((0, []))], start_tags: [], code_blocks_n: 4 }
fn token( lexbuf : Lexbuf ) ->  Token  {
 match __mbtlex_engine_token.run(lexbuf) {
 (0, __mbtlex_captures) => {
  PERCENT_EOF 
 }
 (1, __mbtlex_captures) => {
  PERCENT 
 }
 (2, __mbtlex_captures) => {
  NON_PERCENT 
 }
 (3, __mbtlex_captures) => {
  EOF 
 }
 _ => abort("lex: fail to match")
 }
 }

