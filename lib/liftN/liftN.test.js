import liftN from '../../cjs/liftN'

const array = [1, 2, 3, 4]

const check = (n, product) => {
  let i = n
  let g = liftN(n, (...args) => args)
  while (i > 0) {
    expect(typeof g).toEqual('function')
    g = g(array)
    i--
  }
  expect(Array.isArray(g)).toBeTruthy()
  expect(g).toEqual(product)
}

test('returns the cartesian product for arity = 1', () => {
  const product = [[1], [2], [3], [4]]
  check(1, product)
})

test('returns the cartesian product for arity = 2', () => {
  const product = []
  for (let a of array) {
    for (let b of array) {
      product.push([a, b])
    }
  }
  check(2, product)
})

test('returns the cartesian product for arity = 3', () => {
  const product = []
  for (let a of array) {
    for (let b of array) {
      for (let c of array) {
        product.push([a, b, c])
      }
    }
  }
  check(3, product)
})

test('returns the cartesian product for arity = 4', () => {
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
  check(4, product)
})

test('returns the cartesian product for arity = 5', () => {
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
  check(5, product)
})
