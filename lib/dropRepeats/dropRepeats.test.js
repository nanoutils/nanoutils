import dropRepeats from '../../cjs/dropRepeats'

test('drops only consecutively repeating values', () => {
  expect(dropRepeats([1, 1, 2, 1, 3, 3, 4, 4, 4, 3, 3])).toEqual([
    1, 2, 1, 3, 4, 3,
  ])
  expect(dropRepeats('112334555')).toEqual('12345')
})

test('checks deep equality for structure values', () => {
  const list = [{ a: 1 }, { a: 1 }, [1, 2], [1, 2], []]
  expect(dropRepeats(list)).toEqual([{ a: 1 }, [1, 2], []])
})
