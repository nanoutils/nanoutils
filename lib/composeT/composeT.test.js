import { add, composeT, mapT, takeT } from 'nanoutils'

test('composeT returns a transducer', () => {
  const pushReducer = (array, value) => {
    array.push(value)
    return array
  }
  const transducer = composeT(mapT(add(1)), takeT(2))
  const rootReducer = transducer(pushReducer)

  expect(rootReducer([], 1)).toEqual([2])
  expect(rootReducer([2], 2)).toEqual([2, 3])
  expect(rootReducer([2, 3], 3)).toEqual([2, 3])
})
