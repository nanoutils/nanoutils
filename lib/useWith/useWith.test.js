import identity from '../identity'
import useWith from '.'

it('enhances arguments with callbacks from 2rd argument and call 1st with EM', () => {
  const a = useWith(Math.pow, [i => i - 1, i => i + 1])
  expect(a(3, 4)).toBe(32)
})

it('works for docs', () => {
  const sendSalary = identity
  const countSalary = [value => 0.87 * value]
  const getSalary = useWith(sendSalary, countSalary)

  expect(getSalary(10000)).toBe(8700)
})
