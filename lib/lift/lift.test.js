import lift from '.'

const array = [1, 2, 3, 4]

const check = (n, identity, product) => {
  let i = n
  let g = lift(identity)
  while (i > 0) {
    expect(typeof g).toEqual('function')
    g = g(array)
    i--
  }
  expect(Array.isArray(g)).toBeTruthy()
  expect(g).toEqual(product)
}

test('returns the cartesian product for arity = 1', () => {
  const identity = a => [a]
  const product = [[1], [2], [3], [4]]
  check(1, identity, product)
})

test('returns the cartesian product for arity = 2', () => {
  const identity = (a, b) => [a, b]
  const product = []
  for (let a of array) {
    for (let b of array) {
      product.push([a, b])
    }
  }
  check(2, identity, product)
})

test('returns the cartesian product for arity = 3', () => {
  const identity = (a, b, c) => [a, b, c]
  const product = []
  for (let a of array) {
    for (let b of array) {
      for (let c of array) {
        product.push([a, b, c])
      }
    }
  }
  check(3, identity, product)
})

test('returns the cartesian product for arity = 4', () => {
  const identity = (a, b, c, d) => [a, b, c, d]
  const product = []
  for (let a of array) {
    for (let b of array) {
      for (let c of array) {
        for (let d of array) {
          product.push([a, b, c, d])
        }
      }
    }
  }
  check(4, identity, product)
})

test('returns the cartesian product for arity = 5', () => {
  const identity = (a, b, c, d, e) => [a, b, c, d, e]
  const product = []
  for (let a of array) {
    for (let b of array) {
      for (let c of array) {
        for (let d of array) {
          for (let e of array) {
            product.push([a, b, c, d, e])
          }
        }
      }
    }
  }
  check(5, identity, product)
})
