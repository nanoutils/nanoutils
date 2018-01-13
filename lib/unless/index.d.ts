export default function unless<A, B>(
  cond: (arg: A) => boolean,
  cb: (arg: A) => B
): (arg: A) => A | B
