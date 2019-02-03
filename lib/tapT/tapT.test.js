import tapT from '.'

it('returns a transducer', () => {
  let actualValue = 1
  const transducer = tapT(value => {
    expect(value).toBe(actualValue++)
  })
  const callSideEffect = transducer((array, value) => {
    array.push(value)
    return array
  })

  expect(callSideEffect([], 1)).toEqual([1])
  expect(callSideEffect([1], 2)).toEqual([1, 2])
  expect(callSideEffect([1, 2], 3)).toEqual([1, 2, 3])
  expect(callSideEffect([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
  expect(callSideEffect([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5])
})
