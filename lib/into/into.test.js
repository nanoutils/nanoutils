import into from '.'
import transduce from '../transduce'
import mapT from '../mapT'
import takeT from '../takeT'
import composeT from '../composeT'
import add from '../add'
import subtract from '../subtract'
import flip from '../flip'
import append from '../append'

test('do the same as flip(append)', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)), takeT(2))
  expect(into([], transducer, arr)).toEqual(transduce(transducer, flip(append), [], arr)) // [2, 3]
})

test('works for docs', () => {
  const array = [1, 2, 3, 4, 5]
  const transducer = composeT(mapT(subtract(1)), takeT(3))
  expect(into([], transducer, array)).toEqual(transduce(transducer, flip(append), [], array)) // [0, 1, 2]
})
