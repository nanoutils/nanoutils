import toPairs from '../../cjs/toPairs'

it('returns array of pairs from objects', () => {
  const obj = { a: 1, b: 2, c: 3 }

  const func = () => 1
  const obj2 = { a: 'hey', b: func, c: obj }

  expect(toPairs(obj)).toEqual([['a', 1], ['b', 2], ['c', 3]])
  expect(toPairs(obj2)).toEqual([['a', 'hey'], ['b', func], ['c', obj]])
})
