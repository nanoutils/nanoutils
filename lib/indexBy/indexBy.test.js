var indexBy = require('.')

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
