import sortBy from '../sortBy'
import ascend from '../ascend'
import descend from '../descend'
import prop from '../prop'
import az from '../az'
import za from '../za'
import comparator from '../comparator'

const less = comparator((a, b) => a < b)

test('can compare primitives', () => {
  const arrayOfNumbers = [124, 4.57, 2.35, 0.13]
  const arrayOfStrings = ['124', '346', '235', '568', '457']
  const arrayOfBooleans = [false, true, false, true, false]

  const sort = sortBy(less)

  expect(sort(arrayOfNumbers)).toEqual([0.13, 2.35, 4.57, 124])
  expect(sort(arrayOfStrings)).toEqual(['124', '235', '346', '457', '568'])
  expect(sort(arrayOfBooleans)).toEqual([false, false, false, true, true])
})

test('doesn\'t mutate original array', () => {
  const array = [5, 4, 3, 2, 1]

  sortBy(less, array)

  expect(array).toEqual([5, 4, 3, 2, 1])
})

test('can use ascend and prop to compare object-elements', () => {
  const array = [{ a: 5 }, { a: 4 }, { a: 3 }, { a: 2 }, { a: 1 }]

  expect(sortBy(ascend(prop('a')), array)).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }])
})

test('can use descend and prop to compare object-elements', () => {
  const array = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]

  expect(sortBy(descend(prop('a')), array)).toEqual([{ a: 5 }, { a: 4 }, { a: 3 }, { a: 2 }, { a: 1 }])
})

test('can use az and prop to compare object-elements', () => {
  const array = [{ a: 'z' }, { a: 'y' }, { a: 'x' }, { a: 'w' }, { a: 'v' }]

  expect(sortBy(az(prop('a')), array)).toEqual([{ a: 'v' }, { a: 'w' }, { a: 'x' }, { a: 'y' }, { a: 'z' }])
})

test('can use za and prop to compare object-elements', () => {
  const array = [{ a: 'v' }, { a: 'w' }, { a: 'x' }, { a: 'y' }, { a: 'z' }]

  expect(sortBy(za(prop('a')), array)).toEqual([{ a: 'z' }, { a: 'y' }, { a: 'x' }, { a: 'w' }, { a: 'v' }])
})
