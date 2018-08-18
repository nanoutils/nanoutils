import countBy from '.'

test('counts the elements of list groupping by value of callback', () => {
  const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2]
  expect(countBy(Math.floor)(numbers)).toEqual({ '1': 3, '2': 2, '3': 1 })
})
