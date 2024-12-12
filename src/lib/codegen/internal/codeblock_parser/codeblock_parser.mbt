
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



pub(all) enum SubstItemDesc {
   StartPosOf(String)
   EndPosOf(String)
 }

pub(all) struct SubstItem {
   start : Int
   end : Int
   desc : SubstItemDesc
 }


let scan_codeblock_rbrace_tag_action_row_0 : Array[Int] = []
let scan_codeblock_rbrace_tag_action_row_2 : Array[Int] = [-1]
let scan_codeblock_rbrace_tag_action_row_1 : Array[Int] = [0]

let scan_codeblock_rbrace_tag_action_0 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0]
let scan_codeblock_rbrace_tag_action_1 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_2, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0]
let scan_codeblock_rbrace_tag_action_2 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0]
let scan_codeblock_rbrace_tag_action_3 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_2, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_0]
let scan_codeblock_rbrace_tag_action_4 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_2, scan_codeblock_rbrace_tag_action_row_0]
let scan_codeblock_rbrace_tag_action_5 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_2]
let scan_codeblock_rbrace_tag_action_6 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_0, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1]
let scan_codeblock_rbrace_tag_action_7 : Array[Array[Int]] = [scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_2, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1, scan_codeblock_rbrace_tag_action_row_1]

fn scan_codeblock_rbrace_state_0(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_1(input : Input) -> (State, TagAction) {
   match input {
     1..=35 => (5, scan_codeblock_rbrace_tag_action_0)
     36 => (2, scan_codeblock_rbrace_tag_action_1)
     37..=122 => (5, scan_codeblock_rbrace_tag_action_0)
     123 => (3, scan_codeblock_rbrace_tag_action_0)
     124 => (5, scan_codeblock_rbrace_tag_action_0)
     125 => (4, scan_codeblock_rbrace_tag_action_0)
     126..=127 => (5, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_2(input : Input) -> (State, TagAction) {
   match input {
     65..=90 => (6, scan_codeblock_rbrace_tag_action_0)
     95 => (6, scan_codeblock_rbrace_tag_action_0)
     97..=100 => (6, scan_codeblock_rbrace_tag_action_0)
     101 => (7, scan_codeblock_rbrace_tag_action_2)
     102..=114 => (6, scan_codeblock_rbrace_tag_action_0)
     115 => (8, scan_codeblock_rbrace_tag_action_2)
     116..=122 => (6, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_3(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_4(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_5(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_6(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_7(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=109 => (9, scan_codeblock_rbrace_tag_action_0)
     110 => (10, scan_codeblock_rbrace_tag_action_2)
     111..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_8(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=115 => (9, scan_codeblock_rbrace_tag_action_0)
     116 => (11, scan_codeblock_rbrace_tag_action_2)
     117..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_9(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_10(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=99 => (9, scan_codeblock_rbrace_tag_action_0)
     100 => (12, scan_codeblock_rbrace_tag_action_2)
     101..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_11(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97 => (13, scan_codeblock_rbrace_tag_action_2)
     98..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_12(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=111 => (9, scan_codeblock_rbrace_tag_action_0)
     112 => (14, scan_codeblock_rbrace_tag_action_2)
     113..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_13(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=113 => (9, scan_codeblock_rbrace_tag_action_0)
     114 => (15, scan_codeblock_rbrace_tag_action_2)
     115..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_14(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=110 => (9, scan_codeblock_rbrace_tag_action_0)
     111 => (16, scan_codeblock_rbrace_tag_action_2)
     112..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_15(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=115 => (9, scan_codeblock_rbrace_tag_action_0)
     116 => (17, scan_codeblock_rbrace_tag_action_2)
     117..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_16(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=114 => (9, scan_codeblock_rbrace_tag_action_0)
     115 => (18, scan_codeblock_rbrace_tag_action_3)
     116..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_17(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=111 => (9, scan_codeblock_rbrace_tag_action_0)
     112 => (19, scan_codeblock_rbrace_tag_action_2)
     113..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_18(input : Input) -> (State, TagAction) {
   match input {
     40 => (20, scan_codeblock_rbrace_tag_action_4)
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_19(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=110 => (9, scan_codeblock_rbrace_tag_action_0)
     111 => (21, scan_codeblock_rbrace_tag_action_2)
     112..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_20(input : Input) -> (State, TagAction) {
   match input {
     9 => (23, scan_codeblock_rbrace_tag_action_4)
     32 => (23, scan_codeblock_rbrace_tag_action_4)
     65..=90 => (22, scan_codeblock_rbrace_tag_action_5)
     95 => (22, scan_codeblock_rbrace_tag_action_5)
     97..=122 => (22, scan_codeblock_rbrace_tag_action_5)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_21(input : Input) -> (State, TagAction) {
   match input {
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=114 => (9, scan_codeblock_rbrace_tag_action_0)
     115 => (24, scan_codeblock_rbrace_tag_action_3)
     116..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_22(input : Input) -> (State, TagAction) {
   match input {
     9 => (25, scan_codeblock_rbrace_tag_action_6)
     32 => (25, scan_codeblock_rbrace_tag_action_6)
     41 => (26, scan_codeblock_rbrace_tag_action_7)
     48..=57 => (27, scan_codeblock_rbrace_tag_action_5)
     65..=90 => (27, scan_codeblock_rbrace_tag_action_5)
     95 => (27, scan_codeblock_rbrace_tag_action_5)
     97..=122 => (27, scan_codeblock_rbrace_tag_action_5)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_23(input : Input) -> (State, TagAction) {
   match input {
     9 => (23, scan_codeblock_rbrace_tag_action_4)
     32 => (23, scan_codeblock_rbrace_tag_action_4)
     65..=90 => (22, scan_codeblock_rbrace_tag_action_5)
     95 => (22, scan_codeblock_rbrace_tag_action_5)
     97..=122 => (22, scan_codeblock_rbrace_tag_action_5)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_24(input : Input) -> (State, TagAction) {
   match input {
     40 => (20, scan_codeblock_rbrace_tag_action_4)
     48..=57 => (9, scan_codeblock_rbrace_tag_action_0)
     65..=90 => (9, scan_codeblock_rbrace_tag_action_0)
     95 => (9, scan_codeblock_rbrace_tag_action_0)
     97..=122 => (9, scan_codeblock_rbrace_tag_action_0)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_25(input : Input) -> (State, TagAction) {
   match input {
     9 => (25, scan_codeblock_rbrace_tag_action_6)
     32 => (25, scan_codeblock_rbrace_tag_action_6)
     41 => (26, scan_codeblock_rbrace_tag_action_7)
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_26(input : Input) -> (State, TagAction) {
   match input {
     _ => (0, [])
   }
 }
fn scan_codeblock_rbrace_state_27(input : Input) -> (State, TagAction) {
   match input {
     9 => (25, scan_codeblock_rbrace_tag_action_6)
     32 => (25, scan_codeblock_rbrace_tag_action_6)
     41 => (26, scan_codeblock_rbrace_tag_action_7)
     48..=57 => (27, scan_codeblock_rbrace_tag_action_5)
     65..=90 => (27, scan_codeblock_rbrace_tag_action_5)
     95 => (27, scan_codeblock_rbrace_tag_action_5)
     97..=122 => (27, scan_codeblock_rbrace_tag_action_5)
     _ => (0, [])
   }
 }

let __mbtlex_engine_scan_codeblock_rbrace: Engine = { graph: [scan_codeblock_rbrace_state_0, scan_codeblock_rbrace_state_1, scan_codeblock_rbrace_state_2, scan_codeblock_rbrace_state_3, scan_codeblock_rbrace_state_4, scan_codeblock_rbrace_state_5, scan_codeblock_rbrace_state_6, scan_codeblock_rbrace_state_7, scan_codeblock_rbrace_state_8, scan_codeblock_rbrace_state_9, scan_codeblock_rbrace_state_10, scan_codeblock_rbrace_state_11, scan_codeblock_rbrace_state_12, scan_codeblock_rbrace_state_13, scan_codeblock_rbrace_state_14, scan_codeblock_rbrace_state_15, scan_codeblock_rbrace_state_16, scan_codeblock_rbrace_state_17, scan_codeblock_rbrace_state_18, scan_codeblock_rbrace_state_19, scan_codeblock_rbrace_state_20, scan_codeblock_rbrace_state_21, scan_codeblock_rbrace_state_22, scan_codeblock_rbrace_state_23, scan_codeblock_rbrace_state_24, scan_codeblock_rbrace_state_25, scan_codeblock_rbrace_state_26, scan_codeblock_rbrace_state_27, ], end_nodes: [None, Some((5, [])), Some((4, [])), Some((0, [])), Some((1, [])), Some((4, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), Some((3, [])), None, Some((3, [])), None, None, Some((3, [])), None, Some((2, [((0, 0), (1, 0)), ((2, 0), (3, 0)), ((4, 0), (5, 0))])), None], start_tags: [0], code_blocks_n: 6 }
fn scan_codeblock_rbrace( subst :  Array[SubstItem], lexbuf : Lexbuf ) ->  Unit  {
 match __mbtlex_engine_scan_codeblock_rbrace.run(lexbuf) {
 (0, __mbtlex_captures) => {
 
       scan_codeblock_rbrace(subst, lexbuf)
       scan_codeblock_rbrace(subst, lexbuf)
     
 }
 (1, __mbtlex_captures) => {
  () 
 }
 (2, __mbtlex_captures) => {
 let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
 let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
 ignore(t)
 let (_start_pos_of_t1, _end_pos_of_t1) = __mbtlex_captures[1]
 let t1: String = lexbuf.substring(_start_pos_of_t1, _end_pos_of_t1)
 
 let (_start_pos_of_t2, _end_pos_of_t2) = __mbtlex_captures[2]
 let t2: String = lexbuf.substring(_start_pos_of_t2, _end_pos_of_t2)
 
 
       subst.push({ 
         start: _start_pos_of_t, 
         end: _end_pos_of_t, 
         desc: match t1 {
           "startpos" => StartPosOf(t2)
           "endpos" => EndPosOf(t2)
           _ => panic()
         }
       })
       scan_codeblock_rbrace(subst, lexbuf)
     
 }
 (3, __mbtlex_captures) => {
 
       scan_codeblock_rbrace(subst, lexbuf)
     
 }
 (4, __mbtlex_captures) => {
  scan_codeblock_rbrace(subst, lexbuf) 
 }
 (5, __mbtlex_captures) => {
  () 
 }
 _ => abort("lex: fail to match")
 }
 }


pub fn parse_codeblock(str : String) -> Array[SubstItem] {
   let lexbuf = Lexbuf::from_string(str)
   let subst = []
   scan_codeblock_rbrace(subst, lexbuf)
   subst
 }
