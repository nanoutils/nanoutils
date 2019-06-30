import partition from '../../cjs/partition'

it('splits an object into 2 parts', () => {
  var object = { a: '123', b: '234', c: '12', d: '34' }
  var predicate = a => a.length === 3
  var received = [{ a: '123', b: '234' }, { c: '12', d: '34' }]

  expect(partition(predicate, object)).toEqual(received)
})

it('splits an array into 2 parts', () => {
  var array = ['123', '234', '12', '34']
  var predicate = a => a.length === 3
  var received = [['123', '234'], ['12', '34']]

  expect(partition(predicate, array)).toEqual(received)
})
