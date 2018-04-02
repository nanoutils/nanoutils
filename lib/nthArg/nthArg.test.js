import nthArg from '.'

test('returns function, that returns its nth argument', () => {
  expect(nthArg(1)('a', 'b', 'c')).toBe('b')
})

test('if index is negative, returns items from the end', () => {
  expect(nthArg(-1)('a', 'b', 'c')).toBe('c')
})
