import dropWhileT from '.'

it('returns a transducer', () => {
  const transducer = dropWhileT(value => value < 3)
  const skipValuesLess3 = transducer((array, value) => {
    array.push(value)
    return array
  })

  expect(skipValuesLess3([], 1)).toEqual([])
  expect(skipValuesLess3([], 2)).toEqual([])
  expect(skipValuesLess3([], 3)).toEqual([3])
  expect(skipValuesLess3([3], 2)).toEqual([3, 2])
  expect(skipValuesLess3([3, 2], 1)).toEqual([3, 2, 1])
})
