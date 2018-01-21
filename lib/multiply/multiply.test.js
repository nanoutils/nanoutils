var multiply = require('.')

describe('multiplies numbers', () => {
  test('positive', () => {
    expect(multiply(4)(2)).toEqual(8)
  })

  test('negative', () => { 
    expect(multiply(-5)(-1)).toEqual(5)
  })
})

describe('multiplies strings', () => {
  test('positive number-like', () => {
    expect(multiply('4')('2')).toEqual(8)
  })

  test('negative number-like', () => { 
    expect(multiply('-5')('-1')).toEqual(5)
  })

  test('not-a-number-like', () => {
    expect(multiply('qwe')('rty')).toEqual(NaN);
  })
})

describe('multiplies booleans', () => {
  test('true values', () => {
    expect(multiply(true)(true)).toEqual(1);
  })
  
  test('false values', () => {
    expect(multiply(false)(false)).toEqual(0)
  })
})

describe('multiplies undefined and null', () => {
  test('undefined values', () => {
    expect(multiply(undefined)(undefined)).toEqual(NaN)
  })

  test('null values', () => {
    expect(multiply(null)(null)).toEqual(0)
  })
})

describe('multiplies objects', () => {
  test('empty', () => {
    expect(multiply({})({})).toEqual(NaN)
  })

  test('non-empty', () => {
    expect(multiply({ a: 1 })({ b: 2 })).toEqual(NaN)
  })
})
