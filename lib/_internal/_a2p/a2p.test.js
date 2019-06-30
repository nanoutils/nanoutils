import a2p from '../../../cjs/_internal/_a2p'

test('converts array to path string', () => {
  expect(a2p(['a', 'b', 'c'])).toBe('a.b.c')
})

test('returns string for another data', () => {
  expect(a2p('a.b.c')).toBe('a.b.c')
  expect(a2p(2)).toBe('2')
  expect(a2p(null)).toBe('')
})
