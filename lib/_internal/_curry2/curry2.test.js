import __ from '../../cjs/__'
import curry2 from '../../cjs/_internal/_curry2'

describe('curry2', () => {
  const add2 = (a, b) => a + b

  it('can be curried', () => {
    expect(curry2(add2)(1, 2)).toBe(3)
    expect(curry2(add2)(1)(2)).toBe(3)
  })

  it('can delay parameter with __', () => {
    expect(curry2(add2)(__, 2)(1)).toBe(3)
    expect(curry2(add2)(1, __)(2)).toBe(3)
  })
})
