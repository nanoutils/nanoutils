import subtract from '.'

it('subtracts two numbers', () => {
  expect(subtract(4)(3)).toBe(1)
})

it('subtracts two numbers from string', () => {
  expect(subtract('4')(3)).toBe(1)
})

describe('subtracts numbers', () => {
  test('positive', () => {
    expect(subtract(4)(2)).toBe(2)
  })

  test('negative', () => {
    expect(subtract(-5)(-1)).toBe(-4)
  })
})

describe('subtracts strings', () => {
  test('positive numbers-like', () => {
    expect(subtract('4')('2')).toBe(2)
  })

  test('negative numbers-like', () => {
    expect(subtract('-5')('-1')).toBe(-4)
  })

  test('not-a-numbers-like', () => {
    expect(subtract('qwe')('rty')).toBeNaN()
  })
})

describe('subtracts booleans', () => {
  test('true values', () => {
    expect(subtract(true)(true)).toBe(0)
  })

  test('false values', () => {
    expect(subtract(false)(false)).toBe(0)
  })
})

describe('subtracts undefined and null', () => {
  test('undefined values', () => {
    expect(subtract(undefined)(undefined)).toBeNaN()
  })

  test('null values', () => {
    expect(subtract(null)(null)).toBe(0)
  })
})

describe('subtracts arrays', () => {
  test('empty', () => {
    expect(subtract([])([])).toBe(0)
  })

  test('non-empty', () => {
    expect(subtract([1])([2])).toBe(-1)
  })
})

describe('subtracts objects', () => {
  test('empty', () => {
    expect(subtract({})({})).toBeNaN()
  })

  test('non-empty', () => {
    expect(subtract({ a: 1 })({ b: 2 })).toBeNaN()
  })
})
