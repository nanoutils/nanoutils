import filter from '../../cjs/filter'

test('filters arrays', () => {
  var isEven = (i) => i % 2 === 0
  expect(filter(isEven, [1, 2, 3, 4])).toEqual([2, 4])
})

test('filters objects', () => {
  var isEven = (i) => i % 2 === 0
  expect(filter(isEven, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, d: 4 })
})

test('works for docs', () => {
  const people = [
    { name: 'Nick Oldman', age: 45 },
    { name: 'Jack Newton', age: 12 },
  ]
  const peopleObj = {
    'Nick Oldman': 45,
    'Jack Newton': 12,
  }

  expect(filter(({ age }) => age >= 18, people)).toEqual([
    { name: 'Nick Oldman', age: 45 },
  ])
  expect(filter((age) => age >= 18, peopleObj)).toEqual({ 'Nick Oldman': 45 })
})
