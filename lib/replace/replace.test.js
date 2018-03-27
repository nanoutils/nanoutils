import replace from '.'

test('it replaces first found substring', () => {
  expect(replace('foo', 'bar', 'foo foo foo')).toBe('bar foo foo')
  expect(replace('foo', 'bar')('foo foo foo')).toBe('bar foo foo')
  expect(replace('foo')('bar', 'foo foo foo')).toBe('bar foo foo')
  expect(replace('foo')('bar')('foo foo foo')).toBe('bar foo foo')
})

test('it replaces all found substrings', () => {
  expect(replace(/foo/g, 'bar', 'foo foo foo')).toBe('bar bar bar')
  expect(replace(/foo/g, 'bar')('foo foo foo')).toBe('bar bar bar')
  expect(replace(/foo/g)('bar', 'foo foo foo')).toBe('bar bar bar')
  expect(replace(/foo/g)('bar')('foo foo foo')).toBe('bar bar bar')
})
