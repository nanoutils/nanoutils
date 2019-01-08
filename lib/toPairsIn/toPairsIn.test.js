import toPairsIn from '.'

it('returns array of pairs from objects including prototype', () => {
  const protoObj = { a: 1 }
  const obj = { b: 2, c: 3, __proto__: protoObj }

  expect(toPairsIn(obj)).toEqual([['b', 2], ['c', 3], ['a', 1]])
})

it('returns shallowly arrays of pairs', () => {
  const dna = {
    father: {
      name: 'Nick Parker',
      age: 36
    }
  }
  const john = {
    name: 'John Parker',
    age: 18,
    __proto__: dna
  }

  const result = [
    ['name', 'John Parker'],
    ['age', 18],
    ['father', { name: 'Nick Parker', age: 36 }]
  ]

  expect(toPairsIn(john)).toEqual(result)
})
