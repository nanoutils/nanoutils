import until from '../../cjs/until'

it('applies cb to value while condition is falsy', () => {
  var val = until(
    (i) => i >= 100,
    (i) => i * 2,
  )(2)
  expect(val).toBe(128)
})

it('words for docs', () => {
  const initialSavings = { age: 10, balance: 1000 }
  const saveUpTo18yo = until(
    ({ age }) => age >= 18,
    ({ age, balance }) => ({ age: age + 1, balance: balance * 2 }),
  )

  const totalSavings = saveUpTo18yo(initialSavings)

  expect(totalSavings.age).toBe(18)
  expect(totalSavings.balance).toBe(256000)
})
