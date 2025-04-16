///|
struct BytesLexbuf {
  content : Bytes
  mut pos : Int
  end : Int
}

///|
pub typealias T = BytesLexbuf

///|
pub fn from_bytes(
  bytes : Bytes,
  start~ : Int = 0,
  end~ : Int = bytes.length()
) -> BytesLexbuf {
  return { content: bytes, pos: start, end }
}

///|
pub fn BytesLexbuf::next(self : BytesLexbuf) -> Byte? {
  let pos = self.pos
  let end = self.end
  if pos < end {
    let c = self.content.unsafe_get(pos)
    self.pos += 1
    return Some(c)
  }
  None
}

///|
pub fn BytesLexbuf::next_as_int(self : BytesLexbuf) -> Int {
  let pos = self.pos
  let end = self.end
  if pos < end {
    let c = self.content.unsafe_get(pos)
    self.pos += 1
    return c.to_int()
  }
  -1
}

///|
pub fn BytesLexbuf::curr_pos(self : BytesLexbuf) -> Int {
  return self.pos
}

///|
pub fn BytesLexbuf::reset(self : BytesLexbuf, pos : Int) -> Unit {
  self.pos = pos
}

///|
pub fn BytesLexbuf::unsafe_get(self : BytesLexbuf, pos : Int) -> Byte {
  return self.content.unsafe_get(pos)
}

///|
pub fn BytesLexbuf::sub_lexeme(
  self : BytesLexbuf,
  start : Int,
  end : Int
) -> @bytes.View {
  return self.content[start:end]
}
