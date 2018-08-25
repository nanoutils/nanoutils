import toPairsIn from '.'

test("returns array of arrays with object's key-value pairs including prototype", () => {
  const protoObj = { a: 1 }
  const obj = { b: 2, c: 3, __proto__: protoObj }

  expect(toPairsIn(obj)).toEqual([['b', 2], ['c', 3], ['a', 1]])
})
