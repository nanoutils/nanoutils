import sort from '../../cjs/sort'
import descend from '../../cjs/descend'
import za from '../../cjs/za'
import identity from '../../cjs/identity'

it('sorts an array', () => {
  const numbers = [1, 2, 3, 4, 5]
  expect(sort(descend(identity), numbers)).toEqual([5, 4, 3, 2, 1])

  const strings = ['1', '2', '3', '4', '5']
  expect(sort(za(identity), strings)).toEqual(['5', '4', '3', '2', '1'])
})

it('does not mutate array', () => {
  const numbers = [1, 2, 3, 4, 5]
  expect(sort(descend(identity), numbers)).not.toBe(numbers)
})
