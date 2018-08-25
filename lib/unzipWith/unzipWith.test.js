import unzipWith from '.'

test('unzips with callback', () => {
  const val = unzipWith((a, b) => a + b, [[1, 10, 100], [2, 20, 200]])
  expect(val).toEqual([3, 30, 300])
})
