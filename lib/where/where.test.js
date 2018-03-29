import where from '.'

test('return true if all functions in spec, that matches the same key returns true', () => {
  const equalsTwo = x => x === 2
  const isEven = x => x % 2 === 0
  const isArray = x => Array.isArray(x)

  const spec = {
    a: equalsTwo,
    b: isEven,
    c: isArray
  }

  const obj1 = { a: 2, b: 4, c: [1, 2] }
  const obj2 = { a: 2, b: 4, c: 'hey' }

  expect(where(spec, obj1)).toBeTruthy()
  expect(where(spec, obj2)).toBeFalsy()
})

test('the spec keys are in priority', () => {
  const spec1 = {
    a: x => x === 2,
    b: x => x % 2 === 0
  }

  const spec2 = {
    a: spec1.a,
    b: spec1.b,
    c: x => x === 10
  }

  const obj1 = {
    a: 2,
    b: 4,
    c: 10
  }

  const obj2 = {
    a: 2,
    b: 4
  }

  expect(where(spec1, obj1)).toBeTruthy() // object keys more than spec keys
  expect(where(spec2, obj2)).toBeFalsy() // object keys less than spec keys
})

test('object matches from only own properties', () => {
  const spec = {
    a: x => x === 2,
    b: x => x % 2 === 0
  }

  const proto = { a: 2 }
  const obj = { b: 4, __proto__: proto }

  expect(where(spec, obj)).toBeFalsy()
})
