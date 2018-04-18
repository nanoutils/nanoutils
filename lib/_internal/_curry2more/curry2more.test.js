import curry2more from '.'
import curry2 from '../_curry2'

test('returns function if length is less than 2', () => {
  const a = curry2more(function() {
    return [].slice.call(arguments)
  })

  expect(typeof a(1)).toEqual('function')
})

test('returns result as curry2 if length equals to 2', () => {
  const cb = function() {
    return [].slice.call(arguments)
  }

  const a = curry2more(cb)
  const b = curry2(cb)

  expect(a(1, 2)).toEqual(b(1, 2))
})

test('curries all arguments even if length is more than 2', () => {
  const a = curry2more(function() {
    return [].slice.call(arguments)
  })

  expect(a(1, 2, 3)).toEqual([1, 2, 3])
})
