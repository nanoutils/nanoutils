import transduce from '../../cjs/transduce'
import composeT from '../../cjs/composeT'
import pipeT from '../../cjs/pipeT'
import mapT from '../../cjs/mapT'
import filterT from '../../cjs/filterT'
import takeT from '../../cjs/takeT'
import add from '../../cjs/add'
import flip from '../../cjs/flip'
import append from '../../cjs/append'

it('can apply composed map and take for array', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)), takeT(2))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 3])
})

it('can apply piped map and take for array', () => {
  const arr = [1, 2, 3]
  const transducer = pipeT(mapT(add(1)), takeT(2))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 3])
})

it('can apply composed map and take for number', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)), takeT(2))
  expect(transduce(transducer, add, 0, arr)).toEqual(5)
})

it('can apply piped map and take for number', () => {
  const arr = [1, 2, 3]
  const transducer = pipeT(mapT(add(1)), takeT(2))
  expect(transduce(transducer, add, 0, arr)).toEqual(5)
})

it('can apply composed filter and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isEven = a => a % 2 === 0
  const transducer = composeT(filterT(isEven), takeT(2))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2])
})

it('can apply piped filter and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isEven = a => a % 2 === 0
  const transducer = pipeT(filterT(isEven), takeT(2))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 4])
})

it('can apply composed filter and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = a => a % 2 === 1
  const transducer = composeT(filterT(isOdd), takeT(2))
  expect(transduce(transducer, add, 0, arr)).toEqual(1)
})

it('can apply piped filter and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = a => a % 2 === 1
  const transducer = pipeT(filterT(isOdd), takeT(2))
  expect(transduce(transducer, add, 0, arr)).toEqual(4)
})

it('can be reused twice or more', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = a => a % 2 === 1
  const transducer = pipeT(filterT(isOdd), takeT(2))
  expect(transduce(transducer, add, 0, arr)).toEqual(transduce(transducer, add, 0, arr))
})
