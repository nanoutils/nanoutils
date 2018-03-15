import transduce from '.'
import composeT from '../composeT'
import pipeT from '../pipeT'
import mapT from '../mapT'
import filterT from '../filterT'
// TODO: need to implement takeT
// import take from '../take'
import add from '../add'
import flip from '../flip'
import append from '../append'

test('it can apply composed map and take for array', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 3, 4])
})

test('it can apply piped map and take for array', () => {
  const arr = [1, 2, 3]
  const transducer = pipeT(mapT(add(1)))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 3, 4])
})

test('it can apply composed map and take for number', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)))
  expect(transduce(transducer, add, 0, arr)).toEqual(9)
})

test('it can apply piped map and take for number', () => {
  const arr = [1, 2, 3]
  const transducer = pipeT(mapT(add(1)))
  expect(transduce(transducer, add, 0, arr)).toEqual(9)
})

test('it can apply composed filter and take for array', () => {
  const arr = [1, 2, 3]
  const isEven = a => a % 2 === 0
  const transducer = composeT(filterT(isEven))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2])
})

test('it can apply piped filter and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isEven = a => a % 2 === 0
  const transducer = pipeT(filterT(isEven))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 4, 6])
})

test('it can apply composed filter and take for number', () => {
  const arr = [1, 2, 3]
  const isOdd = a => a % 2 === 1
  const transducer = composeT(filterT(isOdd))
  expect(transduce(transducer, add, 0, arr)).toEqual(4)
})

test('it can apply piped filter and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = a => a % 2 === 1
  const transducer = pipeT(filterT(isOdd))
  expect(transduce(transducer, add, 0, arr)).toEqual(9)
})
