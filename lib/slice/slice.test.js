import { expectNumberOfArgs } from '../_internal/_test'
import slice from '.'

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(
    slice,
    3,
    [1, 2, [1, 2, 3]]
  )
})

test('it accepts 3 arguments, supports a curried version, returns a sliced array', () => {
  expect(slice(1, 2, [1, 2, 3, 4])).toEqual([2])
  expect(slice(1, 2)([1, 2, 3, 4])).toEqual([2])
  expect(slice(1)(2, [1, 2, 3, 4])).toEqual([2])
  expect(slice(1)(2)([1, 2, 3, 4])).toEqual([2])
})

test('it returns nothing if from and/or to values are NaN', () => {
  const from = 1
  const to = 3
  const arr = [1, 2, 3, 4, 5, 6]
  expect(slice(from, NaN, arr)).toEqual([])
  expect(slice(NaN, to, arr)).toEqual([])
  expect(slice(NaN, NaN, arr)).toEqual([])
})

test('it returns nothing if from >= to', () => {
  const two = 2
  const three = 3
  const arr = [1, 2, 3, 4, 5, 6]
  expect(slice(three, two, arr)).toEqual([])
  expect(slice(three, three, arr)).toEqual([])
})

test('it supports Infinity values', () => {
  const inf = Infinity
  const minf = -Infinity
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  expect(slice(inf, minf, arr)).toEqual([])
  expect(slice(minf, 2, arr)).toEqual([1, 2])
  expect(slice(2, inf, arr)).toEqual([3, 4, 5, 6, 7, 8])
  expect(slice(minf, inf, arr)).toEqual(arr)
})
