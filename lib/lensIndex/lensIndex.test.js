import lensIndex from '.'

test('it gets and sets a value', () => {
  const lens = lensIndex(0)
  const array = [1, 2, 3]
  expect(lens(array).get()).toBe(array[0])
  const newValue = 4
  lens(array).set(newValue)
  expect(lens(array).get()).toBe(newValue)
})

test('it returns a reference to an element of array, not a clone', () => {
  const lens = lensIndex(0)
  const array = [{ a: 1 }, { a: 2 }, { a: 3 }]
  const previousValue = { a: 1 }
  expect(lens(array).get()).toEqual(previousValue)
  array[0].a = 2
  expect(lens(array).get()).not.toEqual(previousValue)
})
