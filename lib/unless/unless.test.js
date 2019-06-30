import unless from '../../cjs/unless'

const getEven = unless(i => i % 2 === 0, i => i + 1)

it('applies callback if condition is false', () => {
  expect(getEven(1)).toBe(2)
})

it('returns passed value if condition is true', () => {
  expect(getEven(2)).toBe(2)
})

it('passes example from docs', () => {
  const buyCar = years => ['Bmw', 'Mercedes', 'Toyota'][years % 3]
  const whenYouGetOlderWeWillBuyYouCar = unless(years => years < 18, buyCar)

  expect(whenYouGetOlderWeWillBuyYouCar(17)).toBe(17)
  expect(whenYouGetOlderWeWillBuyYouCar(18)).toBe('Bmw')
})
