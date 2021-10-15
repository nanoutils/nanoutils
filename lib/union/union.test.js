import union from '../../cjs/union'

it('returns concatenated array of two with only unique values', () => {
  const func = function () {
    return 'a'
  }
  const func2 = function () {
    return 'a'
  }
  const a = ['1', func, 2, 2, 3, false]
  const b = [1, 2, 3, false, 4, func, '1', func2]

  // 'a' array itself and then only unique values from 'b' array
  const result = ['1', func, 2, 3, false, 1, 4, func2]
  const result2 = [1, 2, 3, false, 4, func, '1', func2]

  expect(union(a, b)).toEqual(result)
  expect(union(a)(b)).toEqual(result)

  expect(union(b, a)).toEqual(result2)
  expect(union(b)(a)).toEqual(result2)
})

it('does not mutate arrays', () => {
  const a = [1, 2, 3]
  const b = [2, 3, 4]

  union(a, b)

  expect(a).toEqual([1, 2, 3])
  expect(b).toEqual([2, 3, 4])
})
