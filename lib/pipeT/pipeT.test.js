import add from '../add'
import pipeT from '.'
import mapT from '../mapT'
import takeT from '../takeT'

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
