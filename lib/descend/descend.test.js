var descend = require('.')

test('creates descending sort based on callback', () => {
  var byAge = descend(i => i.age)
  var list = [{ age: 2 }, { age: 3 }]
  expect(list.sort(byAge)).toEqual([{ age: 3 }, { age: 2 }])
})
