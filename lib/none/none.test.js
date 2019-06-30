import none from '../../cjs/none'

it('returns true if every element is not matching predicate', () => {
  const isEven = n => n % 2 === 0
  const list1 = [1, 3, 5, 7, 8]
  const list2 = [1, 3, 5, 7]

  expect(none(isEven, list1)).toBeFalsy()
  expect(none(isEven, list2)).toBeTruthy()

  expect(none(isEven)(list1)).toBeFalsy()
  expect(none(isEven)(list2)).toBeTruthy()
})
