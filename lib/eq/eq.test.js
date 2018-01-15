var eq = require('.')

test('confirms that strings are equal', () => {
  expect(eq('1', '1')).toBeTruthy()
  expect(eq('1', 'a')).toBeFalsy()
})

test('confirms that numbers are equal', () => {
  expect(eq(1, 1)).toBeTruthy()
  expect(eq(1, -1)).toBeFalsy()
})

describe('confirms that arrays are equal', () => {
  test('default arrays', () => {
    expect(eq([1, 2, 3], [1, 2, 3])).toBeTruthy()
    expect(eq([1, 2, 3], [1, 2, 'aasdf'])).toBeFalsy()
  })

  test('nested arrays', () => {
    expect(eq([1, 2, [3, [4]]], [1, 2, [3, [4]]])).toBeTruthy()
    expect(eq([1, 2, [3, [4]]], [1, 2, [3, [5]]])).toBeFalsy()
  })

  test('circular arrays', () => {
    var a = [1, 2, 3]
    var b = [1, 2, 3]
    a.push(b, [b], [[b]])
    b.push(b, [b], [[b]])
    expect(eq(a, b)).toBeTruthy()
  })

  test('mirror arrays', () => {
    var a = [1, 2, 3]
    var b = [1, 2, 3]
    a.push(a)
    b.push(b)
    expect(eq(a, b)).toBeTruthy()
  })
})

describe('confirms that objects are equal', () => {
  test('default objects', () => {
    expect(eq({ a: 1, b: 'test' }, { a: 1, b: 'test' })).toBeTruthy()
    expect(eq({ a: 2, b: 'test' }, { a: 1, b: 'test' })).toBeFalsy()
  })

  test('nested objects', () => {
    var a = { a: 1, b: { c: { d: 'test', lol: null } } }
    var b = { a: 1, b: { c: { d: 'test', lol: null } } }
    var c = { a: 1, b: { c: null } }
    expect(eq(a, b)).toBeTruthy()
    expect(eq(a, c)).toBeFalsy()
  })

  test('circular objects', () => {
    var a = { a: 1, b: 2, c: 3 }
    var b = { a: 1, b: 2, c: 3 }
    a.d = a
    b.d = a
    expect(eq(a, b)).toBeTruthy()
  })

  test('mirror objects', () => {
    var a = { a: 1, b: 2, c: 3 }
    var b = { a: 1, b: 2, c: 3 }
    a.d = a
    b.d = b
    expect(eq(a, b)).toBeTruthy()
  })
})

test('confirms that functions are equal', () => {
  var a = function a() {}
  expect(eq(a, a)).toBeTruthy()
})
