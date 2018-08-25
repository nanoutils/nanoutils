import reduce from '.'

const sum = (acc, cur) => acc + cur

test('reduces  an array', () => {
  const arr = [1, 2, 3, 4]
  expect(reduce(sum, 0, arr)).toBe(10)
})

test('reduces construction with .reduce method', () => {
  class A {
    constructor() {
      this.vals = [1, 2, 3, 4]
    }
    reduce(cb, initial) {
      return this.vals.reduce(cb, initial)
    }
  }
  const a = new A()
  expect(reduce(sum, 0, a)).toBe(10)
})

test('reduces generators', () => {
  function * gen() {
    for (let i = 0; i <= 4; i++) yield i
  }
  expect(reduce(sum, 0, gen())).toBe(10)
})

test('reduces constructions with Symbol.iterator', () => {
  const obj = {}
  obj[Symbol.iterator] = function * () {
    yield 1
    yield 2
    yield 3
    yield 4
  }
  expect(reduce(sum, 0, obj)).toBe(10)
})
