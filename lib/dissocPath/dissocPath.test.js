import dissocPath from '../../cjs/dissocPath'

test('cloning object, ommiting value by providing path', () => {
  const obj = {
    a: {
      a: 1,
      b: {
        a: 1,
        b: 2,
        c: {
          a: 1,
          b: 2,
          c: 3,
          d: 4, // this item should be ommited
        },
        d: 4,
      },
      c: 3,
      d: 4,
    },
    b: 2,
    c: 3,
    d: 4,
  }
  const result = {
    a: {
      a: 1,
      b: {
        a: 1,
        b: 2,
        c: {
          a: 1,
          b: 2,
          c: 3,
        },
        d: 4,
      },
      c: 3,
      d: 4,
    },
    b: 2,
    c: 3,
    d: 4,
  }
  expect(dissocPath(['a', 'b', 'c', 'd'], obj)).toMatchObject(result)
})

test('cloning values shallowly, but path objects clones deeply', () => {
  const obj = { a: { b: 1, c: {} }, d: {} }
  const result = dissocPath(['a', 'b'], obj) // { a: { c: {} }, d: {} }

  expect(obj === result).toBeFalsy()
  expect(obj.a === result.a).toBeFalsy()
  expect(obj.a.c === result.a.c).toBeTruthy()
  expect(obj.d === result.d).toBeTruthy()
})

test('if path is not fully resolved, last resolved item become empty object', () => {
  const obj = { a: 1, b: 2 }
  expect(dissocPath(['a', 'b'], obj)).toMatchObject({ a: {}, b: 2 })
})

test('works for docs', () => {
  const path = ['a', 'b', 'c']
  const dissoc = dissocPath(path)

  expect(dissoc({ a: { b: { c: 1 } } })).toEqual({ a: { b: {} } })
  expect(dissoc({ a: { b: 2 } })).toEqual({ a: { b: {} } })
})
