import inc from '.'

describe('increments numbers', () => {
  test('positive', () => {
    expect(inc(5)).toEqual(6)
  })

  test('negative', () => {
    expect(inc(-5)).toEqual(-4)
  })
})

describe('increments strings', () => {
  test('positive number-like', () => {
    expect(inc('5')).toEqual(6)
  })

  test('negative number-like', () => {
    expect(inc('-5')).toEqual(-4)
  })

  test('not-a-number-like', () => {
    expect(inc('qwe')).toEqual(NaN)
  })
})

describe('increments booleans', () => {
  test('true', () => {
    expect(inc(true)).toEqual(2)
  })

  test('false', () => {
    expect(inc(false)).toEqual(1)
  })
})

describe('increments undefined and null', () => {
  test('undefined', () => {
    expect(inc(undefined)).toEqual(NaN)
  })

  test('null', () => {
    expect(inc(null)).toEqual(1)
  })
})

describe('increments objects', () => {
  test('empty', () => {
    expect(inc({})).toEqual(NaN)
  })

  test('non-empty', () => {
    expect(inc({ a: 1 })).toEqual(NaN)
  })
})

test("doesn't mutate variable", () => {
  var a = 1
  inc(a)
  expect(a).toBe(1)
})
