import type from '.'

test('it conforms to Number', () => {
  expect(type(-42.123)).toBe('Number')
  expect(type(-42)).toBe('Number')
  expect(type(0)).toBe('Number')
  expect(type(42)).toBe('Number')
  expect(type(42.0000001)).toBe('Number')
  expect(type(NaN)).toBe('Number')
  expect(type(Infinity)).toBe('Number')
  expect(type(-Infinity)).toBe('Number')
  expect(type(1 / Infinity)).toBe('Number')
  expect(type(1 / -Infinity)).toBe('Number')
  expect(type(Number(1 / -Infinity))).toBe('Number')
  expect(type(+(1 / -Infinity))).toBe('Number')
})

test('it conforms to String', () => {
  expect(type('')).toBe('String')
  expect(type('c')).toBe('String')
  expect(type('non-empty')).toBe('String')
  expect(type(String('non-empty'))).toBe('String')
  expect(type((123).toString())).toBe('String')
  expect(type(typeof 123)).toBe('String')
})

test('it conforms to Symbol (ES6)', () => {
  expect(type(Symbol())).toBe('Symbol')
  expect(type(Symbol('foo'))).toBe('Symbol')
  expect(type(Symbol.iterator)).toBe('Symbol')
})

test('it conforms to Boolean', () => {
  expect(type(false)).toBe('Boolean')
  expect(type(true)).toBe('Boolean')
  expect(type(Boolean(false))).toBe('Boolean')
})

test('it conforms to Object', () => {
  expect(type(new Number(42))).toBe('Object')
  expect(type(new String('123'))).toBe('Object')
  expect(type(new Boolean('false'))).toBe('Object')
  expect(type(new Boolean(false))).toBe('Object')
  expect(type(new Object())).toBe('Object')
  expect(type({})).toBe('Object')
  expect(type({ a: 1 })).toBe('Object')
  expect(type({ 1: 1, 2: 2, length: 2 })).toBe('Object')
})

test('it conforms to Undefined', () => {
  var declared
  expect(type(undefined)).toBe('Undefined')
  expect(type(declared)).toBe('Undefined')
})

test('it conforms to Null', () => {
  expect(type(null)).toBe('Null')
})

test('it conforms to Array', () => {
  expect(type([])).toBe('Array')
  expect(type([1, 2, 3, 4])).toBe('Array')
})

test('it conforms to Function', () => {
  expect(type(() => 1)).toBe('Function')
  expect(type(function() {})).toBe('Function')
  expect(type(Math.cos)).toBe('Function')
})
