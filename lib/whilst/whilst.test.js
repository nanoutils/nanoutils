import whilst from '.'

test('applies cb to value while condition is truthy', () => {
  const val = whilst(i => i <= 100, i => i * 2)(2)
  expect(val).toBe(128)
})

test('can mutate an input', () => {
  let a = [1, 2, 3]
  let i = 0
  const mutate = whilst(arr => i < arr.length, arr => {
    arr[i++]++
    return arr
  })
  const result = [2, 3, 4]
  expect(mutate(a)).toEqual(result)
  expect(a).toEqual(result)
})
