import into from '../../cjs/into'
import transduce from '../../cjs/transduce'
import mapT from '../../cjs/mapT'
import takeT from '../../cjs/takeT'
import composeT from '../../cjs/composeT'
import add from '../../cjs/add'
import subtract from '../../cjs/subtract'
import flip from '../../cjs/flip'
import append from '../../cjs/append'

test('do the same as flip(append)', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)), takeT(2))
  expect(into([], transducer, arr)).toEqual(
    transduce(transducer, flip(append), [], arr),
  ) // [2, 3]
})

test('works for docs', () => {
  const array = [1, 2, 3, 4, 5]
  const transducer = composeT(mapT(subtract(1)), takeT(3))
  expect(into([], transducer, array)).toEqual(
    transduce(transducer, flip(append), [], array),
  ) // [0, 1, 2]
})
