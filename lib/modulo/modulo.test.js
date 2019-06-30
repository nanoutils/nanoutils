import modulo from '../../cjs/modulo'

it('returns remainder of division', () => {
  expect(modulo(4, -3)).toEqual(1)
  expect(modulo(4, 2)).toEqual(0)
})

it('works with strings', () => {
  expect(modulo('4', '-3')).toEqual(1)
  expect(modulo('4', '2')).toEqual(0)
})
