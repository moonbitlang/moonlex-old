///|
pub typealias T = Bitset

///|
struct Bitset {
  bits : FixedArray[Int]
  len : Int
} derive(Eq)

///|
pub fn new(len : Int) -> Bitset {
  { bits: FixedArray::makei((len + 64) / 64, fn(_i) { 0 }), len }
}

///|
pub fn copy(self : Bitset) -> Bitset {
  { bits: self.bits.copy(), len: self.len }
}

///|
pub fn get(self : Bitset, index : Int) -> Bool {
  (self.bits[index / 64] & (1 << (index % 64))) != 0
}

///|
pub fn set(self : Bitset, index : Int, value : Bool) -> Unit {
  let t = index / 64
  self.bits[t] = self.bits[t] | (value.to_int() << index)
}

///|
pub fn union(self : Bitset, other : Bitset) -> Bitset {
  if self.len != other.len {
    abort("")
  } else {
    {
      bits: FixedArray::makei(self.bits.length(), fn(i) {
        self.bits[i] | other.bits[i]
      }),
      len: self.len,
    }
  }
}

///|
pub fn length(self : Bitset) -> Int {
  self.len
}

///|
pub impl Hash for Bitset with hash_combine(self, hasher) {
  self.bits.each(fn(x) { hasher.combine_int(x) })
}

///|
pub impl Show for Bitset with output(self, logger) {
  let arr = []
  for i = 0; i < self.len; i = i + 1 {
    if self.get(i) {
      arr.push(i)
    }
  }
  logger.write_object(arr)
}
