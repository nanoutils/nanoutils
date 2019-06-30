import dec from '../../cjs/dec'

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
    expect(dec('5')).toEqual(4)
  })

  test('negative number-like', () => {
    expect(dec('-5')).toEqual(-6)
  })

  test('not-a-number-like', () => {
    expect(dec('qwe')).toBeNaN()
  })
})

describe('decrements booleans', () => {
  test('true', () => {
    expect(dec(true)).toEqual(0)
  })

  test('false', () => {
    expect(dec(false)).toEqual(-1)
  })
})

describe('decrements undefined and null', () => {
  test('undefined', () => {
    expect(dec(undefined)).toBeNaN()
  })

  test('null', () => {
    expect(dec(null)).toEqual(-1)
  })
})

describe('decrements objects', () => {
  test('empty', () => {
    expect(dec({})).toBeNaN()
  })

  test('non-empty', () => {
    expect(dec({ a: 1 })).toBeNaN()
  })
})

describe('decrements arrays', () => {
  test('empty', () => {
    expect(dec([])).toBe(-1)
  })

  test('one-element', () => {
    expect(dec([1])).toBe(0)
  })

  test('non-empty', () => {
    expect(dec([1, 2, 3])).toBeNaN()
  })
})

test("doesn't mutate variable", () => {
  let a = 1
  dec(a)
  expect(a).toBe(1)
})
