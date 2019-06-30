import add from '../../cjs/add'
import evolve from '../../cjs/evolve'

test('applies callbacks to object properties', () => {
  var human = {
    age: 18,
    nickname: 'Kelin'
  }
  var transformations = {
    age: x => x + 1,
    nickname: nick => nick + '2025'
  }
  expect(evolve(transformations, human)).toEqual({
    age: 19,
    nickname: 'Kelin2025'
  })
})

test('works with nested objects', () => {
  var test = {
    data: {
      elapsed: 100,
      remaining: 1400
    }
  }
  var dec = {
    data: {
      elapsed: x => x + 1,
      remaining: x => x - 1
    }
  }
  expect(evolve(dec, test)).toEqual({
    data: {
      elapsed: 101,
      remaining: 1399
    }
  })
})

test('leaves properties without cb "as is"', () => {
  var human = {
    name: 'Anton',
    surname: 'Kosykh'
  }
  var transformations = {}
  expect(evolve(transformations, human)).toEqual({
    name: 'Anton',
    surname: 'Kosykh'
  })
})

test('does not apply callbacks without props', () => {
  var human = {
    name: 'Anton',
    surname: 'Kosykh'
  }
  var transformations = {
    id: jest.fn(x => x + 1)
  }
  expect(evolve(transformations, human)).toEqual({
    name: 'Anton',
    surname: 'Kosykh'
  })
  expect(transformations.id).not.toBeCalled()
})

test('returns a new object', () => {
  let obj = {}
  expect(evolve({}, obj)).not.toBe(obj)
})

test('works for docs', () => {
  const celebrateBirthday = {
    age: add(1)
  }
  const person = {
    name: 'Alex Berezin',
    age: 24
  }

  expect(evolve(celebrateBirthday, person)).toMatchObject({ name: 'Alex Berezin', age: 25 })
})
