import divide from '.'

describe('divides numbers', () => {
  test('positive', () => {
    expect(divide(4)(2)).toEqual(2)
  })

  test('negative', () => {
    expect(divide(-5)(-1)).toEqual(5)
  })

  test('by zero', () => {
    expect(divide(1)(0)).toEqual(Infinity)
    expect(divide(-1)(0)).toEqual(-Infinity)
  })
})

describe('divides strings', () => {
  test('positive number-like', () => {
    expect(divide('4')('2')).toEqual(2)
  })

  test('negative number-like', () => {
    expect(divide('-5')('-1')).toEqual(5)
  })

  test('not-a-number-like', () => {
    expect(divide('qwe')('rty')).toEqual(NaN)
  })
})

describe('divides booleans', () => {
  test('true values', () => {
    expect(divide(true)(true)).toEqual(1)
  })

  test('false values', () => {
    expect(divide(false)(false)).toEqual(NaN)
  })
})

describe('divides undefined and null', () => {
  test('undefined values', () => {
    expect(divide(undefined)(undefined)).toEqual(NaN)
  })

  test('null values', () => {
    expect(divide(null)(null)).toEqual(NaN)
  })
})

describe('divides objects', () => {
  test('empty', () => {
    expect(divide({})({})).toEqual(NaN)
  })

  test('non-empty', () => {
    expect(divide({ a: 1 })({ b: 2 })).toEqual(NaN)
  })
})

test('works for docs', () => {
  expect(divide(1, 1)).toBe(1)
  expect(divide(1)(1)).toBe(1)
  expect(divide('1')(1)).toBe(1)
  expect(divide('1')('1')).toBe(1)
  expect(divide(-1)(0)).toBe(-Infinity)
  expect(divide(1)('a')).toBeNaN()
  expect(divide(null)(null)).toBeNaN()
  expect(divide(false)(false)).toBeNaN()
  expect(divide(true)(true)).toBe(1)
  expect(divide([])([])).toBeNaN()
  expect(divide([2])([2])).toBe(1)
})
