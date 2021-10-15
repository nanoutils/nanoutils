import intersection from '../../cjs/intersection'

test('returns new list, that includes only common items from both provided lists with no duplicates', () => {
  expect(intersection([1, 2, 3, 4, 4], [3, 4, 5, 6, 3])).toEqual([3, 4])
  expect(
    intersection([true, false, undefined, 'hello'], [false, undefined, 'a']),
  ).toEqual([false, undefined])
})

test('structured elements, like objects and arrays is compared deeply', () => {
  const list1 = [1, 2, 3, { a: 1, b: { a: 1 } }, ['a', 'b']]
  const list2 = [{ b: { a: 1 }, a: 1 }, ['a', 'b'], 'a', 'b']
  const result = [{ a: 1, b: { a: 1 } }, ['a', 'b']]

  expect(intersection(list1, list2)).toEqual(result)
})

test('functions is compared by ref', () => {
  const func = function () {
    return 1
  }

  expect(intersection([1, 2, 3, func], [3, 4, func, 5])).toEqual([3, func])
  expect(
    intersection(
      [
        1,
        2,
        3,
        function () {
          return 1
        },
      ],
      [
        1,
        2,
        3,
        function () {
          return 1
        },
      ],
    ),
  ).toEqual([1, 2, 3])
})

test('handling equality for special types: -0/+0, NaN', () => {
  expect(intersection([NaN, -0], [NaN, 0])).toEqual([NaN])
})
