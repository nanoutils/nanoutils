import curry1more from '../../../cjs/_internal/_curry1more'
import curry2 from '../../../cjs/_internal/_curry2'

describe('curry1more', () => {
  it('returns function if length is less than 2', () => {
    const a = curry1more(function () {
      return [].slice.call(arguments)
    })

    expect(typeof a(1)).toEqual('function')
  })

  it('returns result as curry2 if length equals to 2', () => {
    const cb = function () {
      return [].slice.call(arguments)
    }

    const a = curry1more(cb)
    const b = curry2(cb)

    expect(a(1, 2)).toEqual(b(1, 2))
  })

  it('curries all arguments even if length is more than 2', () => {
    const a = curry1more(function () {
      return [].slice.call(arguments)
    })

    expect(a(1, 2, 3)).toEqual([1, 2, 3])
  })
})
