import p2a from '.'

test('split string by dots', () => {
  expect(p2a('a.b.2')).toEqual(['a', 'b', '2'])
})

test('return array with number for number', () => {
  expect(p2a(2)).toEqual(['2'])
})

test('return empty array for another data', () => {
  expect(p2a({})).toEqual([])
  expect(p2a([])).toEqual([])
  expect(p2a(null)).toEqual([])
  expect(p2a(undefined)).toEqual([])
})
