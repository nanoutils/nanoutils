import curry3more from '.'
import curry3 from '../_curry3'

test('returns function if length is less than 3', () => {
  const a = curry3more(function() {
    return [].slice.call(arguments)
  })

  expect(typeof a(1)).toEqual('function')
  expect(typeof a(1, 2)).toEqual('function')
  expect(typeof a(1)(2)).toEqual('function')
})

test('returns result as curry3 if length equals to 3', () => {
  const cb = function() {
    return [].slice.call(arguments)
  }

  const a = curry3more(cb)
  const b = curry3(cb)

  expect(a(1, 2, 3)).toEqual(b(1, 2, 3))
})

test('curries all arguments even if length is more than 3', () => {
  const a = curry3more(function() {
    return [].slice.call(arguments)
  })

  expect(a(1, 2, 3, 4)).toEqual([1, 2, 3, 4])
})
