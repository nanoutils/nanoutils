import partial from '.'

it('applies arguments to a function', () => {
  const parted = partial((a, b, c, d) => a + b + c + d, [1, 2])
  expect(parted(3, 4)).toBe(10)
})

it('applies arguments to a function in advance', () => {
  const parted = partial((a, b, c, d) => a + b + c + d, [1, 2, 3, 4])
  expect(parted(5, 6)).toBe(10)
})

it('allows to iterate over last parameters', () => {
  const euroChange = (now, change) => now + change
  const calculateTomorrowEuro = partial(euroChange, [78.66])
  const probabilities = [
    { p: 50, change: 0.34 },
    { p: 25, change: -0.33 },
    { p: 15, change: 0.49 },
    { p: 10, change: -0.66 }
  ]
  let tomorrowEuro = probabilities.reduce(
    (result, { p, change }) => result + p * calculateTomorrowEuro(change) / 100,
    0
  )

  expect(tomorrowEuro).toBe(78.755)
})
