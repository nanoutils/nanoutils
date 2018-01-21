var subtract = require('.')

test('subtracts two numbers', () => {
  expect(subtract(4)(3)).toEqual(1)
})

test('subtracts two numbers from string', () => {
  expect(subtract('4')(3)).toEqual(1)
})

describe('subtracts numbers', () => {
  test('positive', () => {
    expect(subtract(4)(2)).toEqual(2)
  })

  test('negative', () => { 
    expect(subtract(-5)(-1)).toEqual(-4)
  })
})

describe('subtracts strings', () => {
  test('positive numbers-like', () => {
    expect(subtract('4')('2')).toEqual(2)
  })

  test('negative numbers-like', () => { 
    expect(subtract('-5')('-1')).toEqual(-4)
  })

  test('not-a-numbers-like', () => {
    expect(subtract('qwe')('rty')).toEqual(NaN);
  })
})

describe('subtracts booleans', () => {
  test('true values', () => {
    expect(subtract(true)(true)).toEqual(0);
  })
  
  test('false values', () => {
    expect(subtract(false)(false)).toEqual(0)
  })
})

describe('subtracts undefined and null', () => {
  test('undefined values', () => {
    expect(subtract(undefined)(undefined)).toEqual(NaN)
  })

  test('null values', () => {
    expect(subtract(null)(null)).toEqual(0)
  })
})

describe('subtracts objects', () => {
  test('empty', () => {
    expect(subtract({})({})).toEqual(NaN)
  })

  test('non-empty', () => {
    expect(subtract({ a: 1 })({ b: 2 })).toEqual(NaN)
  })
})
