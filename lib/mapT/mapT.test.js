import mapT from '../../cjs/mapT'

it('returns a transducer', () => {
  const pushReducer = (array, value) => {
    array.push(value)
    return array
  }
  const triple = (value) => value * 3
  const transducer = mapT(triple)
  const rootReducer = transducer(pushReducer)

  expect(rootReducer([], 1)).toEqual([3])
  expect(rootReducer([3], 2)).toEqual([3, 6])
  expect(rootReducer([3, 6], 3)).toEqual([3, 6, 9])
  expect(rootReducer([3, 6, 9], 4)).toEqual([3, 6, 9, 12])
  expect(rootReducer([3, 6, 9, 12], 5)).toEqual([3, 6, 9, 12, 15])
})
