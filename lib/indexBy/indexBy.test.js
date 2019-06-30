import indexBy from '../../cjs/indexBy'
import prop from '../../cjs/prop'

test('no tests yet', () => {
  var list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }]
  var indexed = indexBy(i => i.id, list)
  expect(indexed).toEqual({
    abc: { id: 'abc', title: 'B' },
    xyz: { id: 'xyz', title: 'A' }
  })
})

test('overrides already existed keys', () => {
  var list = [
    { id: 'xyz', title: 'A' },
    { id: 'abc', title: 'B' },
    { id: 'abc', title: 'C' }
  ]
  var indexed = indexBy(i => i.id, list)
  expect(indexed).toEqual({
    abc: { id: 'abc', title: 'C' },
    xyz: { id: 'xyz', title: 'A' }
  })
})

test('works from docs', () => {
  const changes = [
    { id: 123, currency: 'rur' },
    { id: 234, currency: 'usd' },
    { id: 123, currency: 'usd' }
  ]

  const billChangeById = indexBy(prop('id'))

  expect(billChangeById(changes)).toEqual({
    123: { id: 123, currency: 'usd' },
    234: { id: 234, currency: 'usd' }
  })
})
