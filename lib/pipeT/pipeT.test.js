import add from '../../cjs/add'
import pipeT from '../../cjs/pipeT'
import mapT from '../../cjs/mapT'
import takeT from '../../cjs/takeT'

it('returns a transducer', () => {
  const pushReducer = (array, value) => {
    array.push(value)
    return array
  }
  const transducer = pipeT(takeT(2), mapT(add(1)))
  const rootReducer = transducer(pushReducer)

  expect(rootReducer([], 1)).toEqual([2])
  expect(rootReducer([2], 2)).toEqual([2, 3])
  expect(rootReducer([2, 3], 3)).toEqual([2, 3])
})
