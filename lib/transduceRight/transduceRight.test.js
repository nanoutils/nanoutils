import add from '../../cjs/add'
import append from '../../cjs/append'
import composeT from '../../cjs/composeT'
import dropT from '../../cjs/dropT'
import dropWhileT from '../../cjs/dropWhileT'
import filterT from '../../cjs/filterT'
import flip from '../../cjs/flip'
import identity from '../../cjs/identity'
import mapT from '../../cjs/mapT'
import pipeT from '../../cjs/pipeT'
import prepend from '../../cjs/prepend'
import takeT from '../../cjs/takeT'
import takeWhileT from '../../cjs/takeWhileT'
import transduce from '../../cjs/transduce'
import transduceRight from '../../cjs/transduceRight'

it('appends in reversed order to transduce', () => {
  const arr = [1, 2, 3]
  const map = mapT(identity)

  const direct = transduce(map, flip(append), [], arr)
  const reversed = transduceRight(map, flip(append), [], arr)
  expect(reversed).toEqual(direct.reverse())
})

it('can apply composed map and take for array', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)), takeT(2))
  expect(transduceRight(transducer, flip(append), [], arr)).toEqual([4, 3])
})

it('can apply piped map and take for array', () => {
  const arr = [1, 2, 3]
  const transducer = pipeT(mapT(add(1)), takeT(2))
  expect(transduceRight(transducer, flip(append), [], arr)).toEqual([4, 3])
})

it('can apply composed map and take for number', () => {
  const arr = [1, 2, 3]
  const transducer = composeT(mapT(add(1)), takeT(2))
  expect(transduceRight(transducer, add, 0, arr)).toEqual(7)
})

it('can apply piped map and take for number', () => {
  const arr = [1, 2, 3]
  const transducer = pipeT(mapT(add(1)), takeT(2))
  expect(transduceRight(transducer, add, 0, arr)).toEqual(7)
})

it('can apply composed filter and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isEven = (a) => a % 2 === 0
  const transducer = composeT(filterT(isEven), takeT(2))
  expect(transduceRight(transducer, flip(append), [], arr)).toEqual([6])
})

it('can apply piped filter and take for array', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isEven = (a) => a % 2 === 0
  const transducer = pipeT(filterT(isEven), takeT(2))
  expect(transduceRight(transducer, flip(append), [], arr)).toEqual([6, 4])
})

it('can apply composed filter and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = (a) => a % 2 === 1
  const transducer = composeT(filterT(isOdd), takeT(2))
  expect(transduceRight(transducer, add, 0, arr)).toEqual(5)
})

it('can apply piped filter and take for number', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = (a) => a % 2 === 1
  const transducer = pipeT(filterT(isOdd), takeT(2))
  expect(transduceRight(transducer, add, 0, arr)).toEqual(8)
})

it('can be reused twice or more', () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const isOdd = (a) => a % 2 === 1
  const transducer = pipeT(filterT(isOdd), takeT(2))
  expect(transduceRight(transducer, add, 0, arr)).toEqual(
    transduceRight(transducer, add, 0, arr),
  )
})

it('can replace possible implementation of dropLastT with dropT', () => {
  const arr = [1, 2, 3, 4]
  const reversed = transduceRight(dropT(2), flip(prepend), [], arr)
  expect(reversed).toEqual([1, 2])
})

it('can replace possible implementation of dropLastWhileT with dropWhileT', () => {
  const arr = [1, 2, 3, 4]
  const isGreater2 = dropWhileT((value) => value > 2)
  const reversed = transduceRight(isGreater2, flip(prepend), [], arr)
  expect(reversed).toEqual([1, 2])
})

it('can replace possible implementation of takeLastT with takeT', () => {
  const arr = [1, 2, 3]
  const reversed = transduceRight(takeT(2), flip(prepend), [], arr)
  expect(reversed).toEqual([2, 3])
})

it('can replace possible implementation of takeLastWhileT with takeWhileT', () => {
  const arr = [1, 2, 3, 4]
  const isGreater2 = takeWhileT((value) => value > 2)
  const reversed = transduceRight(isGreater2, flip(prepend), [], arr)
  expect(reversed).toEqual([3, 4])
})
