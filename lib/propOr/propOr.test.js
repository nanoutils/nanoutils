import propOr from '../../cjs/propOr'

const proto = { a: 1 }
const a = { b: 2, __proto__: proto }

it('returns default value if value is not defined', () => {
  expect(propOr('default', 'c', a)).toBe('default')
  expect(propOr('default', 'a', a)).toBe('default')
})

it('returns value by a key', () => {
  expect(propOr('default', 'b', a)).toBe(2)
})
