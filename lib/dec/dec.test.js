var dec = require('.')

describe('decrements numbers', () => {
  test('positive', () => {
    expect(dec(5)).toEqual(4)
  })

  test('negative', () => { 
    expect(dec(-5)).toEqual(-6)
  })
})

describe('decrements strings', () => {
  test('positive number-like', () => {
    expect(dec(5)).toEqual(4)
  })

  test('negative number-like', () => { 
    expect(dec(-5)).toEqual(-6)
  })

  test('not-a-number-like', () => {
    expect(dec('qwe')).toEqual(NaN);
  })
})

describe('decrements booleans', () => {
  test('true', () => {
    expect(dec(true)).toEqual(0);
  })
  
  test('false', () => {
    expect(dec(false)).toEqual(-1)
  })
})

describe('decrements undefined and null', () => {
  test('undefined', () => {
    expect(dec(undefined)).toEqual(NaN)
  })

  test('null', () => {
    expect(dec(null)).toEqual(-1)
  })
})

describe('decrements objects', () => {
  test('empty', () => {
    expect(dec({})).toEqual(NaN)
  })

  test('non-empty', () => {
    expect(dec({ a: 1 })).toEqual(NaN)
  })
})