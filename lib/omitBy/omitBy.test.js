import omitBy from '.'

it('filters an object by predicate applied to its values', () => {
  const bank = {
    Ann: { balance: 1200 },
    Mike: { balance: 500 }
  }
  const inabilityToPay = ({ balance }, _) => balance < 1000

  expect(omitBy(inabilityToPay, bank)).toMatchObject({ Ann: { balance: 1200 } })
})

it('filters by predicate which also accepts key as 2nd argument', () => {
  var pred = (val, key) => key === 'a' || key === 'b'
  expect(omitBy(pred, { a: 1, b: 2, c: 3, d: 4 })).toMatchObject({ c: 3, d: 4 })
})
