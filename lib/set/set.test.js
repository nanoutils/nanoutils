import lens from '../../cjs/lens'
import set from '../../cjs/set'

const aLens = lens(
  ({ a }) => a,
  (a, obj) => ({ ...obj, a }),
)

it('sets value by lens setter', () => {
  const myObj = {
    a: 1,
    b: 1,
  }

  expect(set(aLens, 2, myObj)).toEqual({ a: 2, b: 1 })
})

it('returns new object', () => {
  const myObj = {
    a: 1,
    b: 1,
  }

  expect(set(aLens, 2, myObj)).not.toBe(myObj)
})
