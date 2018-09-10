import flip from '.'

function toArr(a, b, c) {
  return [a, b, c]
}

test('returns array of reversed args', () => {
  expect(flip(toArr)(1, 2, 3)).toEqual([3, 2, 1])
})

test('works for docs', () => {
  const pushReducer = (arr, v) => {
    arr.push(v)
    return arr
  }
  const push = flip(pushReducer)

  expect(push(2, [1])).toEqual([1, 2])
})
