import pathEq from '../../cjs/pathEq'

it("returns boolean value, if the value at the end of provided path is equals to received value, according to 'equals' method", () => {
  const a = { a: { b: { c: 3 } } }

  expect(pathEq(['a', 'b', 'c'], 3, a)).toBeTruthy()
  expect(pathEq(['a', 'b'], { c: 3 }, a)).toBeTruthy()
  expect(pathEq(['a', 'b'], { c: 4 }, a)).toBeFalsy()
  expect(pathEq(['a', 'b', 'c', 'd'], 1, a)).toBeFalsy()
})
