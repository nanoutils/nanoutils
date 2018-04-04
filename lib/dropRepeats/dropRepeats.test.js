import dropRepeats from '.'

test('drops only consecutively repeating values', () => {
  const list = [1, 1, 2, 1, 3, 3, 4, 4, 4, 3, 3]
  expect(dropRepeats(list)).toEqual([1, 2, 1, 3, 4, 3])
})

test('checks deep equality for structure values', () => {
  const list = [{ a: 1 }, { a: 1 }, [1, 2], [1, 2], []]
  expect(dropRepeats(list)).toEqual([{ a: 1 }, [1, 2], []])
})
