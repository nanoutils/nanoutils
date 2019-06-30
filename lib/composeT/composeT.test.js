import add from '../../cjs/add'
import composeT from '../../cjs/composeT'
import mapT from '../../cjs/mapT'
import takeT from '../../cjs/takeT'

it('returns a transducer', () => {
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
