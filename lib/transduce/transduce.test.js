import transduce from '.'
import compose from '../compose'
import pipe from '../pipe'
import map from '../map'
import filter from '../filter'
import take from '../take'
import add from '../add'
import flip from '../flip'
import append from '../append'

test('it can apply composed map and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const transducer = compose(map(add(1)), take(3))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 3, 4])
})

test('it can apply piped map and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const transducer = pipe(map(add(1)), take(3))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 3, 4])
})

test('it can apply composed map and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const transducer = compose(map(add(1)), take(3))
  expect(transduce(transducer, add, 0, arr)).toEqual(9)
})

test('it can apply piped map and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const transducer = pipe(map(add(1)), take(3))
  expect(transduce(transducer, add, 0, arr)).toEqual(9)
})

test('it can apply composed filter and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isEven = a => a % 2 === 0
  const transducer = compose(filter(isEven), take(3))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2])
})

test('it can apply piped filter and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isEven = a => a % 2 === 0
  const transducer = pipe(filter(isEven), take(3))
  expect(transduce(transducer, flip(append), [], arr)).toEqual([2, 4, 6])
})

test('it can apply composed filter and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = a => a % 2 === 1
  const transducer = compose(filter(isOdd), take(3))
  expect(transduce(transducer, add, 0, arr)).toEqual(4)
})

test('it can apply piped filter and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = a => a % 2 === 1
  const transducer = pipe(filter(isOdd), take(3))
  expect(transduce(transducer, add, 0, arr)).toEqual(9)
})
