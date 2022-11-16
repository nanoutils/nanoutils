import mergeDeepWithKey from '../../cjs/mergeDeepWithKey'

it('merge objects recursively, applies function to repeating keys values with key itself and passing result to new object', () => {
  const a = { a: 1, b: { c: 1, d: [1, 2] } }
  const b = { e: 2, b: { c: 2, d: [3, 4] } }
  const func = (key, a, b) => (key === 'c' ? b : a.concat(b))

  expect(mergeDeepWithKey(func, a, b)).toMatchObject({
    a: 1,
    e: 2,
    b: { c: 2, d: [1, 2, 3, 4] },
  })
})

it('combines different strategies', () => {
  const strategy = (key, first, second) => {
    return {
      leftmost: first,
      rightmost: second,
      overlap: [...first, ...second],
    }[key]
  }
  const left = {
    leftmost: [1, 2],
    rightmost: [3, 4],
    overlap: [5, 6],
  }
  const right = {
    leftmost: [7, 8],
    rightmost: [9, 10],
    overlap: [11, 12],
  }

  expect(mergeDeepWithKey(strategy, left, right)).toMatchObject({
    leftmost: [1, 2],
    rightmost: [9, 10],
    overlap: [5, 6, 11, 12],
  })
})
