import mergeWithKey from '../../cjs/mergeWithKey'

it("returns new object, if two keys are the same, they're merged by provided function, that accept key, left and right values ", () => {
  const a = { a: 1, b: 2, c: [1, 2] }
  const b = { a: 1, b: 3, c: [3, 4] }
  const func = (key, left, right) => (key === 'c' ? left.concat(right) : right)
  expect(mergeWithKey(func, a, b)).toMatchObject({
    a: 1,
    b: 3,
    c: [1, 2, 3, 4],
  })
})

it('does not mutate object, but shallow clones inner structures, which was not modified by provided function', () => {
  const obj = {}
  const a = { a: obj, c: [1, 2] }
  const b = { b: obj, c: [3, 4] }
  const func = (k, l, r) => (k === 'c' ? l.concat(r) : r)
  const result = mergeWithKey(func, a, b)

  expect(result).toMatchObject({ a: obj, b: obj, c: [1, 2, 3, 4] })
  expect(result === a).toBeFalsy()
  expect(result === b).toBeFalsy()
  expect(result.a === obj).toBeTruthy()
  expect(result.b === obj).toBeTruthy()
  expect(result.c === a.c).toBeFalsy()
  expect(result.c === b.c).toBeFalsy()
})

it('merges only own properties', () => {
  const a = { a: 1, b: 2, __proto__: { c: 3 } }
  const b = { a: 2, b: 3, __proto__: { d: 4 } }
  const func = (k, l, r) => r

  expect(mergeWithKey(func, a, b)).toMatchObject({ a: 2, b: 3 })
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

  expect(mergeWithKey(strategy, left, right)).toMatchObject({
    leftmost: [1, 2],
    rightmost: [9, 10],
    overlap: [5, 6, 11, 12],
  })
})
