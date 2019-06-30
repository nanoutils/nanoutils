import propSatisfies from '../../cjs/propSatisfies'

const isEven = x => x % 2 === 0
const object = { a: 1, b: 2 }

it('returns true if predicate returns true', () => {
  expect(propSatisfies(isEven, 'b', object)).toBeTruthy()
})

it('returns false otherwise', () => {
  expect(propSatisfies(isEven, 'a', object)).toBeFalsy()
})
