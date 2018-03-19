import ascend from '.'

test('creates ascending sort based on callback', () => {
  var byAge = ascend(i => i.age)
  var list = [{ age: 3 }, { age: 2 }]
  expect(list.sort(byAge)).toEqual([{ age: 2 }, { age: 3 }])
})
