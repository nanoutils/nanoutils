export default function unless<A, B, C>(
  cond: (arg: A) => boolean,
  ifTrue: (arg: A) => B,
  ifFalse: (arg: A) => C
): (arg: A) => B | C
