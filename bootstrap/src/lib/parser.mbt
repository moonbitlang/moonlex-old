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

pub fn peek(self : ParserBuf, ~i: Int = 0) -> Char? {
  if self.ptr + i >= self.content.length() {
    None
  } else {
    Some(self.content.get(self.ptr + i))
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
           .map(fn (pair){ (pair.0, s + pair.1) })
      }
    }

    Option(re) => 
      bind_none(self.match_re(re), fn () { Some((self, "")) })
    
    Alter(re1, re2) =>
      bind_none(self.match_re(re1), fn () { self.match_re(re2) })

    Concat(re1, re2) =>
      self.match_re(re1).bind(fn (p0) { 
        p0.0.match_re(re2).map(fn (p1) { (p1.0, p0.1 + p1.1) }) 
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

  self.match_re(re).map(fn (p) {
    let str = p.1
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
    
    (p.0, ch)
  })
}

fn string(self: ParserBuf) -> (ParserBuf, String)? {
  let re = Concat(ReChar('"'), Concat(
      Repetition(Alter(ReStr("\\\""), RevCharSet(['"'])))
    , ReChar('"')))

  self.match_re(re).map(fn (p) { (p.0, p.1.substring(start=1, end=p.1.length()-1)) })
}

pub fn regex_nonleftrec(self: ParserBuf) -> (ParserBuf, Regex)? {
  let p = self.skip_ws()
  match (p.peek(), p.peek(i=1)) {
    (Some('\''), _) => p.char().map(fn (p) { (p.0, ReChar(p.1)) })

    (Some('"'), _) => p.string().map(fn (p) { (p.0, ReStr(p.1)) })

    (Some('['), Some('^')) => {
      let (p, arr) = p.step(i=2).repeat_match(fn (p) {
          p.skip_ws().char()
        })
      p.match_str("]").map(fn (p) { (p, RevCharSet(arr)) })
    }

    (Some('['), _) => {
      let (p, arr) = p.step().repeat_match(fn (p) {
          p.skip_ws().char()
        })
      p.match_str("]").map(fn (p) { (p, CharSet(arr)) })
    }

    (Some('('), _) => {
      p.step().regex().bind(fn (r) {
        r.0.match_str(")").map(fn (p) { (p, r.1) })
      })
    }

    _ => None
  }
}

pub fn regex_leftrec(self: ParserBuf, re: Regex) -> (ParserBuf, Regex)? {
  let p = self.skip_ws()
  match p.peek() {
    Some('|') => 
      p.step().regex().map(fn (p) { (p.0, Alter(re, p.1)) })

    Some('*') => p.step().regex_leftrec(Repetition(re))
    
    Some('+') => p.step().regex_leftrec(Concat(re, Repetition(re)))

    Some('?') => p.step().regex_leftrec(Option(re))

    _ => Some((p, re))
  }
}

pub fn regex(self: ParserBuf) -> (ParserBuf, Regex)? {
  let (p, arr) = self.repeat_match(fn (p) {
    p.regex_nonleftrec().bind(fn (p) {
      p.0.regex_leftrec(p.1)
    })
  })

  if arr.length() == 0 {
    None
  } else {
    let head = arr.get(0).unwrap()
    Some((p, arr.split_at(1).1.fold(init=head, fn (a, b) { Concat(a, b) })))
  }
}

// utils funcs
fn bind_none[T](opt: T?, f: () -> T?) -> T? {
  match opt {
    None => f()
    Some(_) => opt
  }
}