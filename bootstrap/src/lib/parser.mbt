// parser_buf
struct ParserBuf {
  ptr : Int
  content : String
} derive(Show)

pub fn ParserBuf::from_string(content: String) -> ParserBuf {
  { ptr: 0, content }
}

pub fn step(self: ParserBuf, ~i: Int = 1) -> ParserBuf {
  { ptr: self.ptr + i, content: self.content }
}

pub fn peek(self: ParserBuf, ~i: Int = 0) -> Char? {
  if self.ptr + i >= self.content.length() {
    None
  } else {
    Some(self.content.get(self.ptr + i))
  }
}

fn get_str(self: ParserBuf, i: Int) -> String? {
  if self.ptr + i > self.content.length() {
    None
  } else {
    Some(self.content.substring(start=self.ptr, end=self.ptr + i))
  }
}

fn match_str(self : ParserBuf, pattern : String) -> ParserBuf? {
  for i = 0; i < pattern.length(); i = i + 1 {
    if self.peek(i=i) != Some(pattern.get(i)) {
      break None
    }
  } else {
    Some(self.step(i=pattern.length()))
  }
}

fn match_re(self: ParserBuf, re: Regex) -> (ParserBuf, String)? {
  match re {
    Underscore =>
      self.peek().map(fn(c) { (self.step(), String::from_array([c])) })
    
    EOF => @option.when(self.ptr == self.content.length(), fn() { (self, "") })

    ReStr(str) => self.match_str(str).map(fn (p) { (p, str) })
    
    ReChar(ch) => self.peek().bind(fn (c) { 
      @option.when(ch == c, fn () { (self.step(), String::from_array([c])) })
    })

    CharSet(ch_set) => self.peek().bind(fn (c) { 
      @option.when(ch_set.contains(c), fn () { (self.step(), String::from_array([c])) })
    })

    RevCharSet(ch_set) => self.peek().bind(fn (c) { 
      @option.unless(ch_set.contains(c), fn () { (self.step(), String::from_array([c])) })
    })

    Repetition(re) => {
      match self.match_re(re) {
        None => Some((self, ""))
        Some((p, s)) => 
          p.match_re(Repetition(re))
           .map(fn { (p, rest) => (p, s + rest) })
      }
    }

    Option(re) => 
      bind_none(self.match_re(re), fn () { Some((self, "")) })
    
    Alter(re1, re2) =>
      bind_none(self.match_re(re1), fn () { self.match_re(re2) })

    Concat(re1, re2) =>
      self.match_re(re1).bind(fn { (p, s1) =>
        p.match_re(re2).map(fn { (p, s2) => (p, s1 + s2) }) 
      })
    
    Capture(_, _) => abort("Capture is not allowed in ParserBuf")
  }
}

fn repeat_match[T](self: ParserBuf, match_fn: (ParserBuf) -> (ParserBuf, T)?) -> (ParserBuf, Array[T]) {
  for p = self, arr = [] {
    match match_fn(p) {
      None => break (p, arr)
      Some((p, t)) => {
        println(p)
        arr.push(t)
        continue p, arr
      }
    }
  }
}

fn skip_ws(self: ParserBuf) -> ParserBuf {
  for p = self {
    if p.peek() == Some(' ') {
      continue p.step()
    } else {
      break p
    }
  }
}

// parser
pub fn char(self: ParserBuf) -> (ParserBuf, Char)? {
  let re = Concat(ReChar('\''), 
    Alter(
      Concat(Underscore, ReChar('\'')),
      Concat(Concat(ReChar('\\'), Underscore), ReChar('\''))
    )
  )

  self.match_re(re).map(fn { (p, str) => {
    let ch = if str.length() == 3 {
        str.get(1)
      } else {
        match str.get(2) {
          't' => '\t'
          'n' => '\n'
          '\\' => '\\'
          _ => abort("unsupported escaped char")
        }
      }
    
    (p, ch)
  }})
}

fn string(self: ParserBuf) -> (ParserBuf, String)? {
  let re = Concat(ReChar('"'), Concat(
      Repetition(Alter(ReStr("\\\""), RevCharSet(['"'])))
    , ReChar('"')))

  self.match_re(re).map(fn { (p, s) => (p, s.substring(start=1, end=s.length()-1)) })
}

fn charset_inside(self: ParserBuf) -> (ParserBuf, Array[Char]) {
  let (p, arr) = self.repeat_match(fn (p) {
    let c = p.skip_ws().char()
    c.bind(fn { (p, ch) => {
      let p = p.skip_ws()
      if p.peek() == Some('-') {
        let ch_end = p.step().skip_ws().char()
        ch_end.map(fn { (p, ch_end) => {
          (p, ch_range(ch, ch_end))
        }})
      } else {
        Some((p, [ch]))
      }
    }})
  })

  (p, arr.flatten())
}

pub fn regex_nonleftrec(self: ParserBuf) -> (ParserBuf, Regex)? {
  let p = self.skip_ws()
  match (p.peek(), p.peek(i=1)) {
    (Some('\''), _) => p.char().map(fn { (p, ch) => (p, ReChar(ch)) })

    (Some('"'), _) => p.string().map(fn { (p, str) => (p, ReStr(str)) })

    (Some('['), Some('^')) => {
      let (p, arr) = p.step(i=2).charset_inside()
      p.match_str("]").map(fn (p) { (p, RevCharSet(arr)) })
    }

    (Some('['), _) => {
      let (p, arr) = p.step().charset_inside()
      p.match_str("]").map(fn (p) { (p, CharSet(arr)) })
    }

    (Some('('), _) => {
      p.step().regex().bind(fn { (p, re) =>
        p.match_str(")").map(fn (p) { (p, re) })
      })
    }

    _ => None
  }
}

pub fn regex_leftrec(self: ParserBuf, re: Regex) -> (ParserBuf, Regex)? {
  let p = self.skip_ws()
  match p.peek() {
    Some('|') => 
      p.step().regex().map(fn { (p, re2) => (p, Alter(re, re2)) })

    Some('*') => p.step().regex_leftrec(Repetition(re))
    
    Some('+') => p.step().regex_leftrec(Concat(re, Repetition(re)))

    Some('?') => p.step().regex_leftrec(Option(re))

    _ => Some((p, re))
  }
}

pub fn regex(self: ParserBuf) -> (ParserBuf, Regex)? {
  let (p, arr) = self.repeat_match(fn (p) {
    p.regex_nonleftrec().bind(fn { (p, re) =>
      p.regex_leftrec(re)
    })
  })

  if arr.length() == 0 {
    None
  } else {
    let head = arr.get(0).unwrap()
    Some((p, arr.split_at(1).1.fold(init=head, fn (a, b) { Concat(a, b) })))
  }
}

fn identifier(self: ParserBuf) -> (ParserBuf, String)? {
  let re = Concat(
    CharSet(ch_range('a', 'z')),
    Repetition(CharSet(
      [ch_range('a', 'z'), ch_range('A', 'Z'), ch_range('0', '9'), ['_']].flatten()
    ))
  )

  self.match_re(re)
}

pub fn var_definition(self: ParserBuf) -> (ParserBuf, VarDefinition)? {
  self.skip_ws().identifier().bind(fn { (p, id) => {
    p.skip_ws().match_str(":").bind(fn (p) {
      // read until ',' or ')' and the parentheses matched
      let stack: Array[Char] = []
      for i = 0; ; i = i + 1 {
        match p.peek(i=i) {
          None => break None // in lex, var_definition're unpossiable to appear on the end
          Some('[' as c) | Some('(' as c) => stack.push(c)
          Some(',') => {
            if stack.is_empty() {
              break Some((p.step(i=i), { identifier: id, ty: p.get_str(i).unwrap() }))
            }
          }
          Some(')') => {
            if stack.is_empty() {
              break Some((p.step(i=i), { identifier: id, ty: p.get_str(i).unwrap() }))
            } else if stack.pop() != Some('(') {
              break None
            }
          }
          Some(']') => {
            if stack.pop() != Some('[') {
              break None
            }
          }
          Some(_) => continue
        }
      }
    })
  }})
}

// utils funcs
fn bind_none[T](opt: T?, f: () -> T?) -> T? {
  match opt {
    None => f()
    Some(_) => opt
  }
}

// include end
fn ch_range(ch_begin: Char, ch_end: Char) -> Array[Char] {
  let ch_begin = ch_begin.to_int()
  let ch_end = ch_end.to_int()
  Array::makei(ch_end - ch_begin + 1, fn (i) { Char::from_int(i + ch_begin) })
}