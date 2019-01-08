import splitWhen from '.'

it('splits when a predicate return true', () => {
  const value = splitWhen(i => i === 3, [1, 2, 3, 1, 2, 3])

  expect(value).toEqual([
    [1, 2],
    [3, 1, 2, 3]
  ])
})

it('can be controlled what time it should be returned true', () => {
  let repeats = 1
  const value = splitWhen(
    value => value === 1 && !repeats--,
    [1, 2, 3, 1, 2, 3]
  )
  expect(value).toEqual([
    [1, 2, 3],
    [1, 2, 3]
  ])
})

it('works for docs example', () => {
  const euroExchangeRateHistory = [78.1, 78.3, 79.0, 78.7, 78.9]

  let previous = null
  const isGoingDown = value => {
    if (!previous || (previous <= value)) {
      previous = value
      return false
    }
    return true
  }

  expect(splitWhen(isGoingDown, euroExchangeRateHistory)).toEqual([[78.1, 78.3, 79.0], [78.7, 78.9]])
})
