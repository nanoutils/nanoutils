import toString from '../../cjs/toString'

describe('returns string representation of the given value', () => {
  test('primitive values', () => {
    expect(toString('string')).toBe('string')
    expect(toString(1)).toBe('1')
    expect(toString(true)).toBe('true')
    expect(toString(null)).toBe('null')
    expect(toString(undefined)).toBe('undefined')
    expect(toString(NaN)).toBe('NaN')
  })

  test('objecs', () => {
    expect(toString({ a: 1, b: { c: 3 } })).toBe('{"a": 1, "b": {"c": 3}}')
  })

  test('arrays', () => {
    expect(toString([1, 2, 3])).toBe('[1, 2, 3]')
  })

  test('functions', () => {
    const func = function() {
      return 'a'
    }

    expect(toString(func)).toBe(func.toString())
  })

  test('arguments', () => {
    const func = function() {
      return toString(arguments)
    }
    expect(func('f', { a: undefined })).toBe('(function() { return arguments; }(f, {"a": undefined}))')
  })

  test('dates', () => {
    const date = new Date(Date.parse('November 11, 2013 21:00:00 GMT'))
    expect(toString(date)).toBe('new Date("2013-11-11T21:00:00.000Z")')
  })

  test('structures', () => {
    const list = [1, 2, { a: 1, b: undefined }, null, undefined]
    expect(toString(list)).toBe('[1, 2, {"a": 1, "b": undefined}, null, undefined]')
  })
})
