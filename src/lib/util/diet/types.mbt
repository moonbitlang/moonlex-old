///|
enum Tree[T] {
  Empty
  Node(left~ : Tree[T], right~ : Tree[T], size~ : Int, min~ : T, max~ : T)
}

///|
pub type T[A] = Tree[A]
