import flatten from '../../cjs/flatten'
import mergeWith from '../../cjs/mergeWith'

const ato = (arrays) => arrays.map((v) => ({ v }))

it('accepts 3 or more parameters', () => {
  const arrays = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]
  const objects = ato(arrays)
  expect(mergeWith((a, b) => [...a, ...b], ...objects)).toEqual({
    v: flatten(arrays),
  })
})

it('merges object with custom strategy defined in callback', () => {
  const a = { a: true, values: [10, 20] }
  const b = { b: true, values: [15, 35] }
  expect(mergeWith((a, b) => a.concat(b), a, b)).toEqual({
    a: true,
    b: true,
    values: [10, 20, 15, 35],
  })
})
