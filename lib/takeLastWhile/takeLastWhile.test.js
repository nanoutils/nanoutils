import takeLastWhile from '../../cjs/takeLastWhile'

it('takes elements of array until cb becomes false', () => {
  const val = takeLastWhile(i => i !== 1, [5, 4, 3, 2, 1, 5, 2])
  expect(val).toEqual([5, 2])
})
