import range from '.'

it('creates integer range from 1st to 2nd excluding', () => {
  expect(range(1, 5)).toEqual([1, 2, 3, 4])
  expect(range(50, 53)).toEqual([50, 51, 52])
})

it('creates double range', () => {
  expect(range(1.5, 5.5)).toEqual([1.5, 2.5, 3.5, 4.5])
  expect(range(50.3, 53.3)).toEqual([50.3, 51.3, 52.3])
})

it('can combine integer and double values', () => {
  expect(range(1, 3.1)).toEqual([1, 2, 3])
  expect(range(1.1, 3)).toEqual([1.1, 2.1])
})
