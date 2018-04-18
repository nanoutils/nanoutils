import lift from '.'

const identity = (...args) => args

test.only('returns the cartesian product for an array', () => {
  const array = [1, 2, 3, 4]
  const product = [[1], [2], [3], [4]]
  expect(lift(identity, array)).toEqual(product)
})

test('returns the cartesian product for 2 arrays', () => {
  const array = [1, 2, 3, 4]
  const product = []
  for (let a of array) {
    for (let b of array) {
      product.push([a, b])
    }
  }
  expect(lift(identity, array, array)).toEqual(product)
})

test('returns the cartesian product for 3 arrays', () => {
  const array = [1, 2, 3]
  const product = []
  for (let a of array) {
    for (let b of array) {
      for (let c of array) {
        product.push([a, b, c])
      }
    }
  }
  expect(lift(identity, array, array, array)).toEqual(product)
})

test('returns the cartesian product for 4 arrays', () => {
  const array = [1, 2, 3]
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
  expect(lift(identity, array, array, array, array)).toEqual(product)
})

test('returns the cartesian product for 5 arrays', () => {
  const array = [1, 2, 3]
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
  expect(lift(identity, array, array, array, array, array)).toEqual(product)
})
