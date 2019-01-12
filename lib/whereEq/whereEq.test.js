import whereEq from '.'

it('returns boolean if object matches spec', () => {
  const spec = { a: 1, b: 2 }

  expect(whereEq(spec, { a: 1 })).toBeFalsy()
  expect(whereEq(spec, { a: 1, b: 2 })).toBeTruthy()
  expect(whereEq(spec, { a: 1, b: 2, c: 3 })).toBeTruthy()
})

it('supports deep comparing for structure items', () => {
  const spec = { a: { a: 1, b: 2 }, b: [1, 2, 3] }
  const obj1 = { a: { a: 1, b: 2 }, b: [1, 2, 3] } // matches
  const obj2 = { a: { a: 2, b: 2 }, b: [1, 2, 3] } // value in object not matches
  const obj3 = { a: { a: 1, b: 2 }, b: [2, 1, 3] } // value order in array not matches

  expect(whereEq(spec, obj1)).toBeTruthy()
  expect(whereEq(spec, obj2)).toBeFalsy()
  expect(whereEq(spec, obj3)).toBeFalsy()
})

it('checks only object own properties', () => {
  const spec = { a: 1, b: 2 }
  const proto = { a: 1 }
  const obj = { b: 2, __proto__: proto }

  expect(whereEq(spec, obj)).toBeFalsy()
})
