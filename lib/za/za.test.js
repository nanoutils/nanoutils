import za from '../za'
import sortBy from '../sortBy'
import prop from '../prop'

it('can be used with prop and sortBy', () => {
  const array = [{ a: 'w' }, { a: 'x' }, { a: 'y' }, { a: 'z' }]

  expect(sortBy(za(prop('a')), array)).toEqual([{ a: 'z' }, { a: 'y' }, { a: 'x' }, { a: 'w' }])
})
