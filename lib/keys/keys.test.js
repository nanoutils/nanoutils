import keys from '.'

test('returns list of all enumerable own properties', () => {
  const proto = { a: 1 }
  const obj = { b: 2, c: 3, d: 4, __proto__: proto }

  expect(keys(obj)).toEqual(['b', 'c', 'd'])
})

test('works for docs', () => {
  const obj = {
    name: 'Adam Popov',
    __proto__: {
      dad: {
        name: 'David Popov'
      },
      mom: {
        name: 'Margaret Popova'
      }
    }
  }

  expect(keys(obj)).toEqual(['name'])
})
