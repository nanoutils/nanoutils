import project from '.'

it('returns exact fields in a list\'s objects, like SQL select statement', () => {
  const dog = { age: 7, color: 'brown', gender: 'female' }
  const cat = { age: 2, color: 'gray', gender: 'male' }
  const animals = [dog, cat]

  const [resDog, resCat] = project(['age', 'gender'], animals)

  expect(resDog).toMatchObject({ age: 7, gender: 'female' })
  expect(resCat).toMatchObject({ age: 2, gender: 'male' })
})

it('supports arrays indexes', () => {
  const strings = ['hello', 'goodbye']
  const [first, second] = project([0, 1], strings)

  expect(first).toMatchObject({ 0: 'h', 1: 'e' })
  expect(second).toMatchObject({ 0: 'g', 1: 'o' })
})

it('supports array of arrays', () => {
  const toys = ['Pig', 'Lion', 'Penguin']
  const games = ['Monopoly', 'Crocodile', 'Munchkin']
  const stuff = [toys, games]

  const [resToys, resGames] = project([0, 2], stuff)

  expect(resToys).toEqual({ 0: 'Pig', 2: 'Penguin' })
  expect(resGames).toEqual({ 0: 'Monopoly', 2: 'Munchkin' })
})

it('writes undefined values', () => {
  const dog = { age: 7, color: 'brown', gender: 'female' }
  const cat = { age: 2, color: 'gray', gender: 'male' }
  const animals = [dog, cat]

  const [resDog, resCat] = project(['age', 'name'], animals)

  expect(resDog).toMatchObject({ age: 7, name: undefined })
  expect(resCat).toMatchObject({ age: 2, name: undefined })
})
