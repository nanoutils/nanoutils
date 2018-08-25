import valuesIn from '.'

test('return all enumerable values of object including all prototype values', () => {
  const first = { a: 1 }

  const second = {
    b: 2,
    __proto__: first
  }

  const third = {
    c: 3,
    __proto__: second
  }

  expect(valuesIn(third)).toEqual([3, 2, 1])
  expect(valuesIn(first)).toEqual([1])
})
