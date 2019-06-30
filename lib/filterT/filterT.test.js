import filterT from '../../cjs/filterT'

it('returns a transducer', () => {
  const pushReducer = (array, value) => {
    array.push(value)
    return array
  }
  const isEven = value => value % 2 === 0
  const transducer = filterT(isEven)
  const rootReducer = transducer(pushReducer)

  expect(rootReducer([], 1)).toEqual([])
  expect(rootReducer([], 2)).toEqual([2])
  expect(rootReducer([2], 3)).toEqual([2])
  expect(rootReducer([2], 4)).toEqual([2, 4])
  expect(rootReducer([2, 4], 5)).toEqual([2, 4])
})
