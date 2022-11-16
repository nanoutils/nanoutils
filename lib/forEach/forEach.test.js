import forEach from '../../cjs/forEach'

test('loops through array and applies provided function to each element', () => {
  let output = ''
  const arr = [1, 2, 3]
  const fn = (x) => {
    output += x * 2
  }

  forEach(fn, arr)
  expect(output).toBe('246')
})

test('returns originally provided array', () => {
  const arr = [1, 2, 3]
  const fn = (x) => x * 2
  const result = forEach(fn, arr)

  expect(result === arr).toBeTruthy()
})

test('does not skip deleted indexes', () => {
  let output = ''
  const arr = [1, 2, 3]
  const fn = (x) => {
    output += x
  }

  delete arr[1]

  forEach(fn, arr)
  expect(output).toBe('1undefined3')
})
