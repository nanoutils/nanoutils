import keysIn from '../../cjs/keysIn'

test('returns list of all enumerable own and prototype properties', () => {
  const proto = { a: 1 }
  const obj = { b: 2, c: 3, d: 4, __proto__: proto }

  expect(keysIn(obj)).toEqual(['b', 'c', 'd', 'a'])
})

test('works for docs', () => {
  const obj = {
    name: 'Adam Popov',
    __proto__: {
      dad: {
        name: 'David Popov',
      },
      mom: {
        name: 'Margaret Popova',
      },
    },
  }

  expect(keysIn(obj)).toEqual(['name', 'dad', 'mom'])
})
