import az from '../az'
import prop from '../prop'
import sortBy from '../sortBy'

test('can be used with prop and sortBy', () => {
  const array = [{ a: 'z' }, { a: 'y' }, { a: 'x' }, { a: 'w' }]

  expect(sortBy(az(prop(['a'])), array)).toEqual([
    { a: 'w' },
    { a: 'x' },
    { a: 'y' },
    { a: 'z' }
  ])
})
