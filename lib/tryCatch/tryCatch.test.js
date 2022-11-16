import tryCatch from '../../cjs/tryCatch'

const trier = (obj) => obj.a
const catcher = () => 'sorry'

it('calls trier and do not calls catcher if trier does not throw error', () => {
  expect(tryCatch(trier, catcher)({ a: 1 })).toBe(1)
  expect(tryCatch(trier)(catcher)({ a: 1 })).toBe(1)
})

it('calls catcher, because trier throws error', () => {
  expect(tryCatch(trier, catcher)(null)).toBe('sorry')
  expect(tryCatch(trier)(catcher)(null)).toBe('sorry')
})
