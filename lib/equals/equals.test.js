import equals from '../../cjs/equals'

test('confirms that strings are equal', () => {
  expect(equals('1', '1')).toBeTruthy()
  expect(equals('1', 'a')).toBeFalsy()
})

test('confirms that numbers are equal', () => {
  expect(equals(1, 1)).toBeTruthy()
  expect(equals(1, -1)).toBeFalsy()
})

describe('confirms that arrays are equal', () => {
  test('default arrays', () => {
    expect(equals([1, 2, 3], [1, 2, 3])).toBeTruthy()
    expect(equals([1, 2, 3], [1, 2, 'aasdf'])).toBeFalsy()
  })

  test('nested arrays', () => {
    expect(equals([1, 2, [3, [4]]], [1, 2, [3, [4]]])).toBeTruthy()
    expect(equals([1, 2, [3, [4]]], [1, 2, [3, [5]]])).toBeFalsy()
  })

  test('circular arrays', () => {
    var a = [1, 2, 3]
    var b = [1, 2, 3]
    a.push(b, [b], [[b]])
    b.push(b, [b], [[b]])
    expect(equals(a, b)).toBeTruthy()
  })

  test.skip('mirror arrays', () => {
    var a = [1, 2, 3]
    var b = [1, 2, 3]
    a.push(a)
    b.push(b)
    expect(equals(a, b)).toBeTruthy()
  })
})

describe('confirms that objects are equal', () => {
  test('default objects', () => {
    expect(equals({ a: 1, b: 'test' }, { a: 1, b: 'test' })).toBeTruthy()
    expect(equals({ a: 2, b: 'test' }, { a: 1, b: 'test' })).toBeFalsy()
  })

  test('nested objects', () => {
    var a = { a: 1, b: { c: { d: 'test', lol: null } } }
    var b = { a: 1, b: { c: { d: 'test', lol: null } } }
    var c = { a: 1, b: { c: null } }
    expect(equals(a, b)).toBeTruthy()
    expect(equals(a, c)).toBeFalsy()
  })

  test('circular objects', () => {
    var a = { a: 1, b: 2, c: 3 }
    var b = { a: 1, b: 2, c: 3 }
    a.d = a
    b.d = a
    expect(equals(a, b)).toBeTruthy()
  })

  test.skip('mirror objects', () => {
    var a = { a: 1, b: 2, c: 3 }
    var b = { a: 1, b: 2, c: 3 }
    a.d = a
    b.d = b
    expect(equals(a, b)).toBeTruthy()
  })
})

test('confirms that functions are equal', () => {
  var a = function a() {}
  expect(equals(a, a)).toBeTruthy()
})

test('works for docs', () => {
  const danAbramov = { firstName: 'Dan', lastName: 'Abramov' }
  const danIvanov = { firstName: 'Dan', lastName: 'Ivanov' }

  expect(equals(danAbramov, danAbramov)).toBeTruthy()
  expect(equals(danAbramov, danIvanov)).toBeFalsy()
  expect(equals(danIvanov, danIvanov)).toBeTruthy()
})
