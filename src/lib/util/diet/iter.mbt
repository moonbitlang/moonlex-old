///|
pub fn[N] Tree::iter_intervals(self : Tree[N]) -> Iterator[(N, N)] {
  let mut iter = InorderIterator::new(self)
  Iterator::new(fn() { iter.next() })
}

///|
pub fn[N : @bounded_enum.T] Tree::iter(self : Tree[N]) -> Iterator[N] {
  self
  .iter_intervals()
  .flat_map(fn(it) {
    let (min, max) = it
    let mut current = min
    let mut done = false
    Iterator::new(fn() {
      if done || current > max {
        return None
      }
      let value = current
      if current == max {
        done = true
      } else {
        current = N::succ(current)
      }
      Some(value)
    })
  })
}
