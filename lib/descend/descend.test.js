import descend from '.'

test('creates descending sort based on callback', () => {
  const byAge = descend(i => i.age)
  const list = [{ age: 2 }, { age: 3 }]
  expect(list.sort(byAge)).toEqual([{ age: 3 }, { age: 2 }])
})

test('works for docs', () => {
  const byAge = descend(({ age }) => age)

  expect(byAge({ age: 19 }, { age: 18 })).toBe(-1)
  expect(byAge({ age: 18 }, { age: 18 })).toBe(0)
  expect(byAge({ age: 18 }, { age: 19 })).toBe(1)
})
