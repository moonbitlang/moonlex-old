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




let token_tag_action_row_0 : Array[Int] = []
let token_tag_action_row_1 : Array[Int] = [-1]
let token_tag_action_row_2 : Array[Int] = [0]

let token_tag_action_0 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_1 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_1, token_tag_action_row_0]
let token_tag_action_3 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_1]
let token_tag_action_10 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_12 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_15 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_2, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_6 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_9 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_17 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_19 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_2, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_7 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_8 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_11 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_14 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_2, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_2 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_4 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_5 : Array[Array[Int]] = [token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_2, token_tag_action_row_2, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_13 : Array[Array[Int]] = [token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_16 : Array[Array[Int]] = [token_tag_action_row_2, token_tag_action_row_1, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]
let token_tag_action_18 : Array[Array[Int]] = [token_tag_action_row_2, token_tag_action_row_2, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0, token_tag_action_row_0]

fn token_state_0(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    -1 => (21, token_tag_action_0)
    9..=10 => (23, token_tag_action_1)
    13 => (23, token_tag_action_1)
    32 => (23, token_tag_action_1)
    34 => (2, token_tag_action_0)
    39 => (3, token_tag_action_2)
    40 => (14, token_tag_action_0)
    41 => (13, token_tag_action_0)
    42 => (8, token_tag_action_0)
    43 => (7, token_tag_action_0)
    45 => (5, token_tag_action_0)
    47 => (22, token_tag_action_0)
    59 => (10, token_tag_action_0)
    61 => (18, token_tag_action_0)
    63 => (6, token_tag_action_0)
    91 => (12, token_tag_action_0)
    93 => (11, token_tag_action_0)
    94 => (4, token_tag_action_0)
    95 => (17, token_tag_action_3)
    97..=111 => (1, token_tag_action_3)
    112 => (19, token_tag_action_3)
    113 => (1, token_tag_action_3)
    114 => (20, token_tag_action_3)
    115..=122 => (1, token_tag_action_3)
    123 => (16, token_tag_action_0)
    124 => (9, token_tag_action_0)
    125 => (15, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_1(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_2(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_3(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=38 => (25, token_tag_action_4)
    40..=91 => (25, token_tag_action_4)
    92 => (26, token_tag_action_0)
    93..=1114111 => (25, token_tag_action_4)
    _ => (-1, [])
  }
}
fn token_state_4(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_5(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_6(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_7(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_8(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_9(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_10(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_11(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_12(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_13(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_14(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_15(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_16(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_17(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_18(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    62 => (27, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_19(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97 => (28, token_tag_action_3)
    98..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_20(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=116 => (24, token_tag_action_3)
    117 => (29, token_tag_action_3)
    118..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_21(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_22(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    47 => (30, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_23(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    -1 => (21, token_tag_action_0)
    9..=10 => (23, token_tag_action_1)
    13 => (23, token_tag_action_1)
    32 => (23, token_tag_action_1)
    34 => (2, token_tag_action_0)
    39 => (3, token_tag_action_2)
    40 => (14, token_tag_action_0)
    41 => (13, token_tag_action_0)
    42 => (8, token_tag_action_0)
    43 => (7, token_tag_action_0)
    45 => (5, token_tag_action_0)
    47 => (22, token_tag_action_0)
    59 => (10, token_tag_action_0)
    61 => (18, token_tag_action_0)
    63 => (6, token_tag_action_0)
    91 => (12, token_tag_action_0)
    93 => (11, token_tag_action_0)
    94 => (4, token_tag_action_0)
    95 => (17, token_tag_action_3)
    97..=111 => (1, token_tag_action_3)
    112 => (19, token_tag_action_3)
    113 => (1, token_tag_action_3)
    114 => (20, token_tag_action_3)
    115..=122 => (1, token_tag_action_3)
    123 => (16, token_tag_action_0)
    124 => (9, token_tag_action_0)
    125 => (15, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_24(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_25(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (31, token_tag_action_5)
    _ => (-1, [])
  }
}
fn token_state_26(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (39, token_tag_action_0)
    92 => (33, token_tag_action_0)
    98 => (37, token_tag_action_0)
    110 => (34, token_tag_action_0)
    114 => (35, token_tag_action_0)
    116 => (36, token_tag_action_0)
    117 => (38, token_tag_action_6)
    118 => (40, token_tag_action_0)
    120 => (32, token_tag_action_7)
    _ => (-1, [])
  }
}
fn token_state_27(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_28(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=113 => (24, token_tag_action_3)
    114 => (41, token_tag_action_3)
    115..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_29(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=107 => (24, token_tag_action_3)
    108 => (42, token_tag_action_3)
    109..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_30(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=9 => (44, token_tag_action_0)
    10 => (43, token_tag_action_0)
    11..=1114111 => (44, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_31(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_32(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (45, token_tag_action_8)
    65..=70 => (45, token_tag_action_8)
    97..=102 => (45, token_tag_action_8)
    _ => (-1, [])
  }
}
fn token_state_33(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (46, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_34(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (47, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_35(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (48, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_36(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (49, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_37(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (50, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_38(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (51, token_tag_action_9)
    65..=70 => (51, token_tag_action_9)
    97..=102 => (51, token_tag_action_9)
    123 => (52, token_tag_action_10)
    _ => (-1, [])
  }
}
fn token_state_39(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (53, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_40(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (54, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_41(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=114 => (24, token_tag_action_3)
    115 => (55, token_tag_action_3)
    116..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_42(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=100 => (24, token_tag_action_3)
    101 => (56, token_tag_action_3)
    102..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_43(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_44(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=9 => (44, token_tag_action_0)
    10 => (43, token_tag_action_0)
    11..=1114111 => (44, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_45(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (57, token_tag_action_11)
    65..=70 => (57, token_tag_action_11)
    97..=102 => (57, token_tag_action_11)
    _ => (-1, [])
  }
}
fn token_state_46(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_47(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_48(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_49(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_50(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_51(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (58, token_tag_action_9)
    65..=70 => (58, token_tag_action_9)
    97..=102 => (58, token_tag_action_9)
    _ => (-1, [])
  }
}
fn token_state_52(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (59, token_tag_action_12)
    65..=70 => (59, token_tag_action_12)
    97..=102 => (59, token_tag_action_12)
    _ => (-1, [])
  }
}
fn token_state_53(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_54(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_55(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=100 => (24, token_tag_action_3)
    101 => (60, token_tag_action_3)
    102..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_56(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (61, token_tag_action_13)
    13 => (61, token_tag_action_13)
    32 => (61, token_tag_action_13)
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=122 => (24, token_tag_action_3)
    _ => (-1, [])
  }
}
fn token_state_57(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (62, token_tag_action_14)
    _ => (-1, [])
  }
}
fn token_state_58(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (63, token_tag_action_9)
    65..=70 => (63, token_tag_action_9)
    97..=102 => (63, token_tag_action_9)
    _ => (-1, [])
  }
}
fn token_state_59(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (59, token_tag_action_12)
    65..=70 => (59, token_tag_action_12)
    97..=102 => (59, token_tag_action_12)
    125 => (64, token_tag_action_15)
    _ => (-1, [])
  }
}
fn token_state_60(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (65, token_tag_action_0)
    13 => (65, token_tag_action_0)
    32 => (65, token_tag_action_0)
    48..=57 => (24, token_tag_action_3)
    65..=90 => (24, token_tag_action_3)
    95 => (24, token_tag_action_3)
    97..=122 => (24, token_tag_action_3)
    123 => (66, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_61(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (61, token_tag_action_13)
    13 => (61, token_tag_action_13)
    32 => (61, token_tag_action_13)
    95 => (67, token_tag_action_16)
    97..=122 => (67, token_tag_action_16)
    _ => (-1, [])
  }
}
fn token_state_62(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_63(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (68, token_tag_action_17)
    65..=70 => (68, token_tag_action_17)
    97..=102 => (68, token_tag_action_17)
    _ => (-1, [])
  }
}
fn token_state_64(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (69, token_tag_action_15)
    _ => (-1, [])
  }
}
fn token_state_65(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (65, token_tag_action_0)
    13 => (65, token_tag_action_0)
    32 => (65, token_tag_action_0)
    123 => (66, token_tag_action_0)
    _ => (-1, [])
  }
}
fn token_state_66(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_67(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (72, token_tag_action_18)
    13 => (72, token_tag_action_18)
    32 => (72, token_tag_action_18)
    40 => (71, token_tag_action_18)
    48..=57 => (70, token_tag_action_16)
    65..=90 => (70, token_tag_action_16)
    95 => (70, token_tag_action_16)
    97..=122 => (70, token_tag_action_16)
    _ => (-1, [])
  }
}
fn token_state_68(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (73, token_tag_action_19)
    _ => (-1, [])
  }
}
fn token_state_69(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_70(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (72, token_tag_action_18)
    13 => (72, token_tag_action_18)
    32 => (72, token_tag_action_18)
    40 => (71, token_tag_action_18)
    48..=57 => (70, token_tag_action_16)
    65..=90 => (70, token_tag_action_16)
    95 => (70, token_tag_action_16)
    97..=122 => (70, token_tag_action_16)
    _ => (-1, [])
  }
}
fn token_state_71(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (74, token_tag_action_18)
    13 => (74, token_tag_action_18)
    32 => (74, token_tag_action_18)
    _ => (-1, [])
  }
}
fn token_state_72(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (72, token_tag_action_18)
    13 => (72, token_tag_action_18)
    32 => (72, token_tag_action_18)
    40 => (71, token_tag_action_18)
    _ => (-1, [])
  }
}
fn token_state_73(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn token_state_74(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (74, token_tag_action_18)
    13 => (74, token_tag_action_18)
    32 => (74, token_tag_action_18)
    _ => (-1, [])
  }
}

let __mbtlex_engine_token: LexEngine = { graph: [token_state_0, token_state_1, token_state_2, token_state_3, token_state_4, token_state_5, token_state_6, token_state_7, token_state_8, token_state_9, token_state_10, token_state_11, token_state_12, token_state_13, token_state_14, token_state_15, token_state_16, token_state_17, token_state_18, token_state_19, token_state_20, token_state_21, token_state_22, token_state_23, token_state_24, token_state_25, token_state_26, token_state_27, token_state_28, token_state_29, token_state_30, token_state_31, token_state_32, token_state_33, token_state_34, token_state_35, token_state_36, token_state_37, token_state_38, token_state_39, token_state_40, token_state_41, token_state_42, token_state_43, token_state_44, token_state_45, token_state_46, token_state_47, token_state_48, token_state_49, token_state_50, token_state_51, token_state_52, token_state_53, token_state_54, token_state_55, token_state_56, token_state_57, token_state_58, token_state_59, token_state_60, token_state_61, token_state_62, token_state_63, token_state_64, token_state_65, token_state_66, token_state_67, token_state_68, token_state_69, token_state_70, token_state_71, token_state_72, token_state_73, token_state_74, ], end_nodes: [None, Some((33, [((10, 0), (11, 0))])), Some((32, [])), None, Some((20, [])), Some((19, [])), Some((18, [])), Some((17, [])), Some((16, [])), Some((15, [])), Some((14, [])), Some((12, [])), Some((11, [])), Some((10, [])), Some((9, [])), Some((8, [])), Some((7, [])), Some((6, [])), Some((13, [])), Some((33, [((10, 0), (11, 0))])), Some((33, [((10, 0), (11, 0))])), Some((2, [])), None, Some((0, [])), Some((33, [((10, 0), (11, 0))])), None, None, Some((5, [])), Some((33, [((10, 0), (11, 0))])), Some((33, [((10, 0), (11, 0))])), Some((1, [])), Some((21, [((2, 0), (3, 0))])), None, None, None, None, None, None, None, None, None, Some((33, [((10, 0), (11, 0))])), Some((33, [((10, 0), (11, 0))])), Some((1, [])), Some((1, [])), None, Some((27, [])), Some((26, [])), Some((25, [])), Some((23, [])), Some((22, [])), None, None, Some((28, [])), Some((24, [])), Some((33, [((10, 0), (11, 0))])), Some((33, [((10, 0), (11, 0))])), None, None, None, Some((33, [((10, 0), (11, 0))])), None, Some((29, [((4, 0), (5, 0))])), None, None, None, Some((4, [])), None, None, Some((31, [((8, 0), (9, 0))])), None, Some((3, [((0, 0), (1, 0))])), None, Some((30, [((6, 0), (7, 0))])), Some((3, [((0, 0), (1, 0))]))], start_tags: [10], code_blocks_n: 34 }
fn token( lexbuf : Lexbuf ) -> Token {
  match __mbtlex_engine_token.run(lexbuf) {
    (0, __mbtlex_captures) => {
 token(lexbuf) 
    }
    (1, __mbtlex_captures) => {
 token(lexbuf) 
    }
    (2, __mbtlex_captures) => {
 EOI 
    }
    (3, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      let buffer1 = StringBuilder::new()
      let buffer2 = StringBuilder::new()
      code_rparen(buffer1, lexbuf)
      arrow_code_lbrace(buffer2, lexbuf)
      RULE_LC_IDENT_LPAREN_CODE_RPAREN_ARROW_CODE_LBRACE((t, buffer1.to_string(), buffer2.to_string()))
    
    }
    (4, __mbtlex_captures) => {
 PARSE_LBRACE 
    }
    (5, __mbtlex_captures) => {
 FAT_ARROW 
    }
    (6, __mbtlex_captures) => {
 UNDERSCORE 
    }
    (7, __mbtlex_captures) => {
 
      let buffer = StringBuilder::new()
      code_rbrace(buffer, lexbuf)
      LBRACE_CODE_RBRACE(buffer.to_string())
    
    }
    (8, __mbtlex_captures) => {
 RBRACE 
    }
    (9, __mbtlex_captures) => {
 LPAREN 
    }
    (10, __mbtlex_captures) => {
 RPAREN 
    }
    (11, __mbtlex_captures) => {
 LBRACKET 
    }
    (12, __mbtlex_captures) => {
 RBRACKET 
    }
    (13, __mbtlex_captures) => {
 EQ 
    }
    (14, __mbtlex_captures) => {
 SEMICOLON 
    }
    (15, __mbtlex_captures) => {
 BAR 
    }
    (16, __mbtlex_captures) => {
 STAR 
    }
    (17, __mbtlex_captures) => {
 PLUS 
    }
    (18, __mbtlex_captures) => {
 QUESTION 
    }
    (19, __mbtlex_captures) => {
 MINUS 
    }
    (20, __mbtlex_captures) => {
 CARET 
    }
    (21, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  
 CHAR(t.get_char(0).unwrap()) 
    }
    (22, __mbtlex_captures) => {
 CHAR('\u{08}') 
    }
    (23, __mbtlex_captures) => {
 CHAR('\t') 
    }
    (24, __mbtlex_captures) => {
 CHAR('\u{0b}') 
    }
    (25, __mbtlex_captures) => {
 CHAR('\r') 
    }
    (26, __mbtlex_captures) => {
 CHAR('\n') 
    }
    (27, __mbtlex_captures) => {
 CHAR('\\') 
    }
    (28, __mbtlex_captures) => {
 CHAR('\'') 
    }
    (29, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      let code = (try? @strconv.parse_int(t, base=16)).unwrap()
      CHAR(code.unsafe_to_char())
    
    }
    (30, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      let code = (try? @strconv.parse_int(t, base=16)).unwrap()
      CHAR(code.unsafe_to_char())
    
    }
    (31, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      let code = (try? @strconv.parse_int(t, base=16)).unwrap()
      CHAR(code.unsafe_to_char())
    
    }
    (32, __mbtlex_captures) => {

      let buffer = StringBuilder::new()
      string_inner_rquote(buffer, lexbuf)
      STRING(buffer.to_string())
    
    }
    (33, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      match t {
        "eof" => EOF
        "let" => LET
        "as" => AS
        _ => LC_IDENT(t)
      }
    
    }
    _ => abort("lex: fail to match")
  }
}
let string_inner_rquote_tag_action_row_0 : Array[Int] = []
let string_inner_rquote_tag_action_row_2 : Array[Int] = [-1]
let string_inner_rquote_tag_action_row_1 : Array[Int] = [0]

let string_inner_rquote_tag_action_0 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_1 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_2]
let string_inner_rquote_tag_action_6 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_2, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_8 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_2, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_10 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_2 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_2, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_5 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_11 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_2, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_12 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_3 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_2, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_4 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_7 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_2, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]
let string_inner_rquote_tag_action_9 : Array[Array[Int]] = [string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_1, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0, string_inner_rquote_tag_action_row_0]

fn string_inner_rquote_state_0(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    -1 => (2, string_inner_rquote_tag_action_0)
    0..=33 => (1, string_inner_rquote_tag_action_1)
    34 => (4, string_inner_rquote_tag_action_1)
    35..=91 => (1, string_inner_rquote_tag_action_1)
    92 => (3, string_inner_rquote_tag_action_1)
    93..=1114111 => (1, string_inner_rquote_tag_action_1)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_1(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_2(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_3(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    34 => (10, string_inner_rquote_tag_action_0)
    92 => (13, string_inner_rquote_tag_action_0)
    98 => (6, string_inner_rquote_tag_action_0)
    110 => (12, string_inner_rquote_tag_action_0)
    114 => (8, string_inner_rquote_tag_action_0)
    116 => (5, string_inner_rquote_tag_action_0)
    117 => (11, string_inner_rquote_tag_action_2)
    118 => (7, string_inner_rquote_tag_action_0)
    120 => (9, string_inner_rquote_tag_action_3)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_4(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_5(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_6(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_7(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_8(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_9(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (14, string_inner_rquote_tag_action_4)
    65..=70 => (14, string_inner_rquote_tag_action_4)
    97..=102 => (14, string_inner_rquote_tag_action_4)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_10(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_11(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (15, string_inner_rquote_tag_action_5)
    65..=70 => (15, string_inner_rquote_tag_action_5)
    97..=102 => (15, string_inner_rquote_tag_action_5)
    123 => (16, string_inner_rquote_tag_action_6)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_12(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_13(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_14(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (17, string_inner_rquote_tag_action_7)
    65..=70 => (17, string_inner_rquote_tag_action_7)
    97..=102 => (17, string_inner_rquote_tag_action_7)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_15(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (18, string_inner_rquote_tag_action_5)
    65..=70 => (18, string_inner_rquote_tag_action_5)
    97..=102 => (18, string_inner_rquote_tag_action_5)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_16(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (19, string_inner_rquote_tag_action_8)
    65..=70 => (19, string_inner_rquote_tag_action_8)
    97..=102 => (19, string_inner_rquote_tag_action_8)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_17(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (20, string_inner_rquote_tag_action_9)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_18(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (21, string_inner_rquote_tag_action_5)
    65..=70 => (21, string_inner_rquote_tag_action_5)
    97..=102 => (21, string_inner_rquote_tag_action_5)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_19(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (19, string_inner_rquote_tag_action_8)
    65..=70 => (19, string_inner_rquote_tag_action_8)
    97..=102 => (19, string_inner_rquote_tag_action_8)
    125 => (22, string_inner_rquote_tag_action_10)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_20(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_21(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    48..=57 => (23, string_inner_rquote_tag_action_11)
    65..=70 => (23, string_inner_rquote_tag_action_11)
    97..=102 => (23, string_inner_rquote_tag_action_11)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_22(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (24, string_inner_rquote_tag_action_10)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_23(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (25, string_inner_rquote_tag_action_12)
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_24(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn string_inner_rquote_state_25(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}

let __mbtlex_engine_string_inner_rquote: LexEngine = { graph: [string_inner_rquote_state_0, string_inner_rquote_state_1, string_inner_rquote_state_2, string_inner_rquote_state_3, string_inner_rquote_state_4, string_inner_rquote_state_5, string_inner_rquote_state_6, string_inner_rquote_state_7, string_inner_rquote_state_8, string_inner_rquote_state_9, string_inner_rquote_state_10, string_inner_rquote_state_11, string_inner_rquote_state_12, string_inner_rquote_state_13, string_inner_rquote_state_14, string_inner_rquote_state_15, string_inner_rquote_state_16, string_inner_rquote_state_17, string_inner_rquote_state_18, string_inner_rquote_state_19, string_inner_rquote_state_20, string_inner_rquote_state_21, string_inner_rquote_state_22, string_inner_rquote_state_23, string_inner_rquote_state_24, string_inner_rquote_state_25, ], end_nodes: [None, Some((11, [((6, 0), (7, 0))])), Some((12, [])), Some((11, [((6, 0), (7, 0))])), Some((0, [])), Some((2, [])), Some((1, [])), Some((3, [])), Some((4, [])), None, Some((7, [])), None, Some((5, [])), Some((6, [])), None, None, None, None, None, None, Some((8, [((0, 0), (1, 0))])), None, None, None, Some((10, [((4, 0), (5, 0))])), Some((9, [((2, 0), (3, 0))]))], start_tags: [6], code_blocks_n: 13 }
fn string_inner_rquote( buffer : StringBuilder, lexbuf : Lexbuf ) -> Unit {
  match __mbtlex_engine_string_inner_rquote.run(lexbuf) {
    (0, __mbtlex_captures) => {
 () 
    }
    (1, __mbtlex_captures) => {

      buffer.write_char('\u{08}')
      string_inner_rquote(buffer, lexbuf)
    
    }
    (2, __mbtlex_captures) => {

      buffer.write_char('\t')
      string_inner_rquote(buffer, lexbuf)
    
    }
    (3, __mbtlex_captures) => {

      buffer.write_char('\u{0b}')
      string_inner_rquote(buffer, lexbuf)
    
    }
    (4, __mbtlex_captures) => {

      buffer.write_char('\r')
      string_inner_rquote(buffer, lexbuf)
    
    }
    (5, __mbtlex_captures) => {

      buffer.write_char('\n')
      string_inner_rquote(buffer, lexbuf)
    
    }
    (6, __mbtlex_captures) => {

      buffer.write_char('\\')
      string_inner_rquote(buffer, lexbuf)
    
    }
    (7, __mbtlex_captures) => {

      buffer.write_char('"')
      string_inner_rquote(buffer, lexbuf)
    
    }
    (8, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      let code = (try? @strconv.parse_int(t, base=16)).unwrap()
      buffer.write_char(code.unsafe_to_char())
    
    }
    (9, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      let code = (try? @strconv.parse_int(t, base=16)).unwrap()
      buffer.write_char(code.unsafe_to_char())
    
    }
    (10, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      let code = (try? @strconv.parse_int(t, base=16)).unwrap()
      buffer.write_char(code.unsafe_to_char())
    
    }
    (11, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      buffer.write_string(t)
      string_inner_rquote(buffer, lexbuf)
    
    }
    (12, __mbtlex_captures) => {
 abort("Unexpected end of input") 
    }
    _ => abort("lex: fail to match")
  }
}
let code_rparen_tag_action_row_0 : Array[Int] = []
let code_rparen_tag_action_row_2 : Array[Int] = [-1]
let code_rparen_tag_action_row_1 : Array[Int] = [0]

let code_rparen_tag_action_0 : Array[Array[Int]] = [code_rparen_tag_action_row_0, code_rparen_tag_action_row_0]
let code_rparen_tag_action_1 : Array[Array[Int]] = [code_rparen_tag_action_row_1, code_rparen_tag_action_row_2]

fn code_rparen_state_0(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    -1 => (2, code_rparen_tag_action_0)
    0..=39 => (1, code_rparen_tag_action_1)
    40 => (3, code_rparen_tag_action_1)
    41 => (4, code_rparen_tag_action_1)
    42..=1114111 => (1, code_rparen_tag_action_1)
    _ => (-1, [])
  }
}
fn code_rparen_state_1(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rparen_state_2(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rparen_state_3(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rparen_state_4(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}

let __mbtlex_engine_code_rparen: LexEngine = { graph: [code_rparen_state_0, code_rparen_state_1, code_rparen_state_2, code_rparen_state_3, code_rparen_state_4, ], end_nodes: [None, Some((2, [((0, 0), (1, 0))])), Some((3, [])), Some((1, [])), Some((0, []))], start_tags: [0], code_blocks_n: 4 }
fn code_rparen( buffer : StringBuilder, lexbuf : Lexbuf ) -> Unit {
  match __mbtlex_engine_code_rparen.run(lexbuf) {
    (0, __mbtlex_captures) => {
 () 
    }
    (1, __mbtlex_captures) => {

      buffer.write_string("(")
      code_rparen(buffer, lexbuf)
      buffer.write_string(")")
      code_rparen(buffer, lexbuf)
    
    }
    (2, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      buffer.write_string(t)
      code_rparen(buffer, lexbuf)
    
    }
    (3, __mbtlex_captures) => {
 abort("Unexpected end of input") 
    }
    _ => abort("lex: fail to match")
  }
}
let arrow_code_lbrace_tag_action_row_0 : Array[Int] = []
let arrow_code_lbrace_tag_action_row_1 : Array[Int] = [-1]
let arrow_code_lbrace_tag_action_row_2 : Array[Int] = [0]

let arrow_code_lbrace_tag_action_0 : Array[Array[Int]] = [arrow_code_lbrace_tag_action_row_0, arrow_code_lbrace_tag_action_row_0]
let arrow_code_lbrace_tag_action_1 : Array[Array[Int]] = [arrow_code_lbrace_tag_action_row_1, arrow_code_lbrace_tag_action_row_0]
let arrow_code_lbrace_tag_action_2 : Array[Array[Int]] = [arrow_code_lbrace_tag_action_row_2, arrow_code_lbrace_tag_action_row_1]
let arrow_code_lbrace_tag_action_3 : Array[Array[Int]] = [arrow_code_lbrace_tag_action_row_2, arrow_code_lbrace_tag_action_row_2]

fn arrow_code_lbrace_state_0(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (2, arrow_code_lbrace_tag_action_0)
    13 => (2, arrow_code_lbrace_tag_action_0)
    32 => (2, arrow_code_lbrace_tag_action_0)
    45 => (1, arrow_code_lbrace_tag_action_0)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_1(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    62 => (3, arrow_code_lbrace_tag_action_1)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_2(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    9..=10 => (2, arrow_code_lbrace_tag_action_0)
    13 => (2, arrow_code_lbrace_tag_action_0)
    32 => (2, arrow_code_lbrace_tag_action_0)
    45 => (1, arrow_code_lbrace_tag_action_0)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_3(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=8 => (4, arrow_code_lbrace_tag_action_2)
    9..=10 => (5, arrow_code_lbrace_tag_action_1)
    11..=12 => (4, arrow_code_lbrace_tag_action_2)
    13 => (5, arrow_code_lbrace_tag_action_1)
    14..=31 => (4, arrow_code_lbrace_tag_action_2)
    32 => (5, arrow_code_lbrace_tag_action_1)
    33..=122 => (4, arrow_code_lbrace_tag_action_2)
    124..=1114111 => (4, arrow_code_lbrace_tag_action_2)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_4(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=8 => (7, arrow_code_lbrace_tag_action_2)
    9..=10 => (6, arrow_code_lbrace_tag_action_3)
    11..=12 => (7, arrow_code_lbrace_tag_action_2)
    13 => (6, arrow_code_lbrace_tag_action_3)
    14..=31 => (7, arrow_code_lbrace_tag_action_2)
    32 => (6, arrow_code_lbrace_tag_action_3)
    33..=122 => (7, arrow_code_lbrace_tag_action_2)
    123 => (8, arrow_code_lbrace_tag_action_3)
    124..=1114111 => (7, arrow_code_lbrace_tag_action_2)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_5(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=8 => (4, arrow_code_lbrace_tag_action_2)
    9..=10 => (5, arrow_code_lbrace_tag_action_1)
    11..=12 => (4, arrow_code_lbrace_tag_action_2)
    13 => (5, arrow_code_lbrace_tag_action_1)
    14..=31 => (4, arrow_code_lbrace_tag_action_2)
    32 => (5, arrow_code_lbrace_tag_action_1)
    33..=122 => (4, arrow_code_lbrace_tag_action_2)
    124..=1114111 => (4, arrow_code_lbrace_tag_action_2)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_6(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=8 => (7, arrow_code_lbrace_tag_action_2)
    9..=10 => (6, arrow_code_lbrace_tag_action_3)
    11..=12 => (7, arrow_code_lbrace_tag_action_2)
    13 => (6, arrow_code_lbrace_tag_action_3)
    14..=31 => (7, arrow_code_lbrace_tag_action_2)
    32 => (6, arrow_code_lbrace_tag_action_3)
    33..=122 => (7, arrow_code_lbrace_tag_action_2)
    123 => (8, arrow_code_lbrace_tag_action_3)
    124..=1114111 => (7, arrow_code_lbrace_tag_action_2)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_7(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=8 => (7, arrow_code_lbrace_tag_action_2)
    9..=10 => (6, arrow_code_lbrace_tag_action_3)
    11..=12 => (7, arrow_code_lbrace_tag_action_2)
    13 => (6, arrow_code_lbrace_tag_action_3)
    14..=31 => (7, arrow_code_lbrace_tag_action_2)
    32 => (6, arrow_code_lbrace_tag_action_3)
    33..=122 => (7, arrow_code_lbrace_tag_action_2)
    123 => (8, arrow_code_lbrace_tag_action_3)
    124..=1114111 => (7, arrow_code_lbrace_tag_action_2)
    _ => (-1, [])
  }
}
fn arrow_code_lbrace_state_8(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}

let __mbtlex_engine_arrow_code_lbrace: LexEngine = { graph: [arrow_code_lbrace_state_0, arrow_code_lbrace_state_1, arrow_code_lbrace_state_2, arrow_code_lbrace_state_3, arrow_code_lbrace_state_4, arrow_code_lbrace_state_5, arrow_code_lbrace_state_6, arrow_code_lbrace_state_7, arrow_code_lbrace_state_8, ], end_nodes: [None, None, None, None, None, None, None, None, Some((0, [((0, 0), (1, 0))]))], start_tags: [], code_blocks_n: 1 }
fn arrow_code_lbrace( buffer : StringBuilder, lexbuf : Lexbuf ) -> Unit {
  match __mbtlex_engine_arrow_code_lbrace.run(lexbuf) {
    (0, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      buffer.write_string(t)
    
    }
    _ => abort("lex: fail to match")
  }
}
let code_rbrace_tag_action_row_0 : Array[Int] = []
let code_rbrace_tag_action_row_2 : Array[Int] = [-1]
let code_rbrace_tag_action_row_1 : Array[Int] = [0]

let code_rbrace_tag_action_0 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0]
let code_rbrace_tag_action_1 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_2]
let code_rbrace_tag_action_5 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0]
let code_rbrace_tag_action_3 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_2]
let code_rbrace_tag_action_9 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_2, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0]
let code_rbrace_tag_action_6 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0]
let code_rbrace_tag_action_2 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_2]
let code_rbrace_tag_action_7 : Array[Array[Int]] = [code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_2, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0]
let code_rbrace_tag_action_8 : Array[Array[Int]] = [code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0]
let code_rbrace_tag_action_4 : Array[Array[Int]] = [code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_2]
let code_rbrace_tag_action_10 : Array[Array[Int]] = [code_rbrace_tag_action_row_1, code_rbrace_tag_action_row_2, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0, code_rbrace_tag_action_row_0]

fn code_rbrace_state_0(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    -1 => (2, code_rbrace_tag_action_0)
    0..=33 => (1, code_rbrace_tag_action_1)
    34 => (6, code_rbrace_tag_action_2)
    35..=38 => (1, code_rbrace_tag_action_1)
    39 => (5, code_rbrace_tag_action_3)
    40..=46 => (1, code_rbrace_tag_action_1)
    47 => (7, code_rbrace_tag_action_4)
    48..=122 => (1, code_rbrace_tag_action_1)
    123 => (4, code_rbrace_tag_action_1)
    124 => (1, code_rbrace_tag_action_1)
    125 => (3, code_rbrace_tag_action_1)
    126..=1114111 => (1, code_rbrace_tag_action_1)
    _ => (-1, [])
  }
}
fn code_rbrace_state_1(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rbrace_state_2(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rbrace_state_3(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rbrace_state_4(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rbrace_state_5(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=38 => (8, code_rbrace_tag_action_5)
    40..=91 => (8, code_rbrace_tag_action_5)
    93..=1114111 => (8, code_rbrace_tag_action_5)
    _ => (-1, [])
  }
}
fn code_rbrace_state_6(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=33 => (10, code_rbrace_tag_action_6)
    34 => (11, code_rbrace_tag_action_7)
    35..=91 => (10, code_rbrace_tag_action_6)
    92 => (9, code_rbrace_tag_action_6)
    93..=1114111 => (10, code_rbrace_tag_action_6)
    _ => (-1, [])
  }
}
fn code_rbrace_state_7(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    47 => (12, code_rbrace_tag_action_8)
    _ => (-1, [])
  }
}
fn code_rbrace_state_8(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    39 => (13, code_rbrace_tag_action_9)
    _ => (-1, [])
  }
}
fn code_rbrace_state_9(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=1114111 => (14, code_rbrace_tag_action_6)
    _ => (-1, [])
  }
}
fn code_rbrace_state_10(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=33 => (10, code_rbrace_tag_action_6)
    34 => (11, code_rbrace_tag_action_7)
    35..=91 => (10, code_rbrace_tag_action_6)
    92 => (9, code_rbrace_tag_action_6)
    93..=1114111 => (10, code_rbrace_tag_action_6)
    _ => (-1, [])
  }
}
fn code_rbrace_state_11(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rbrace_state_12(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=9 => (15, code_rbrace_tag_action_8)
    11..=1114111 => (15, code_rbrace_tag_action_8)
    _ => (-1, [])
  }
}
fn code_rbrace_state_13(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}
fn code_rbrace_state_14(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=33 => (10, code_rbrace_tag_action_6)
    34 => (11, code_rbrace_tag_action_7)
    35..=91 => (10, code_rbrace_tag_action_6)
    92 => (9, code_rbrace_tag_action_6)
    93..=1114111 => (10, code_rbrace_tag_action_6)
    _ => (-1, [])
  }
}
fn code_rbrace_state_15(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    0..=9 => (15, code_rbrace_tag_action_8)
    10 => (16, code_rbrace_tag_action_10)
    11..=1114111 => (15, code_rbrace_tag_action_8)
    _ => (-1, [])
  }
}
fn code_rbrace_state_16(input : LexInput) -> (LexState, LexTagAction) {
  match input {
    _ => (-1, [])
  }
}

let __mbtlex_engine_code_rbrace: LexEngine = { graph: [code_rbrace_state_0, code_rbrace_state_1, code_rbrace_state_2, code_rbrace_state_3, code_rbrace_state_4, code_rbrace_state_5, code_rbrace_state_6, code_rbrace_state_7, code_rbrace_state_8, code_rbrace_state_9, code_rbrace_state_10, code_rbrace_state_11, code_rbrace_state_12, code_rbrace_state_13, code_rbrace_state_14, code_rbrace_state_15, code_rbrace_state_16, ], end_nodes: [None, Some((5, [((6, 0), (7, 0))])), Some((6, [])), Some((4, [])), Some((3, [])), Some((5, [((6, 0), (7, 0))])), Some((5, [((6, 0), (7, 0))])), Some((5, [((6, 0), (7, 0))])), None, None, None, Some((1, [((2, 0), (3, 0))])), None, Some((2, [((4, 0), (5, 0))])), None, None, Some((0, [((0, 0), (1, 0))]))], start_tags: [0, 2, 4, 6], code_blocks_n: 7 }
fn code_rbrace( buffer : StringBuilder, lexbuf : Lexbuf ) -> Unit {
  match __mbtlex_engine_code_rbrace.run(lexbuf) {
    (0, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      buffer.write_string(t)
      code_rbrace(buffer, lexbuf)
    
    }
    (1, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      buffer.write_string(t)
      code_rbrace(buffer, lexbuf)
    
    }
    (2, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      buffer.write_string(t)
      code_rbrace(buffer, lexbuf)
    
    }
    (3, __mbtlex_captures) => {

      buffer.write_string("{")
      code_rbrace(buffer, lexbuf)
      buffer.write_string("}")
      code_rbrace(buffer, lexbuf)
    
    }
    (4, __mbtlex_captures) => {
 () 
    }
    (5, __mbtlex_captures) => {
  let (_start_pos_of_t, _end_pos_of_t) = __mbtlex_captures[0]
  let t: String = lexbuf.substring(_start_pos_of_t, _end_pos_of_t)
  

      buffer.write_string(t)
      code_rbrace(buffer, lexbuf)
    
    }
    (6, __mbtlex_captures) => {
 abort("Unexpected end of input") 
    }
    _ => abort("lex: fail to match")
  }
}

