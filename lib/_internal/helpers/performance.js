const TIME_1M = [1e4, 1e5, 1e6]
const TIME_100K = [1e3, 1e4, 1e5]
const TIME_10K = [1e2, 1e3, 1e4]
const TIME_1K = [1e1, 1e2, 1e3]

const TYPE_1M = '1m'
const TYPE_100K = '100k'
const TYPE_10K = '10k'
const TYPE_1K = '1k'

/**
 * Generate 3 arrays based on times and fValue
 * @param {[Number, Number, Number]} times - sizes of arrays (for small, medium and large)
 * @param {*} fValue - function that takes Number (index of iteration) and returns a value
 */
const generateArrays = (
  times = [1e4, 1e5, 1e6],
  fValue = () => Math.random() * 1e6 + 1e5
) => {
  const [small, medium, large] = times
  let big1 = []
  let big2 = []
  let big3 = []

  for (let i = 0; i < large; i++) {
    const value = fValue(i)
    if (i < small) {
      big1.push(value)
    }
    if (i < medium) {
      big2.push(value)
    }
    big3.push(value)
  }

  return [big1, big2, big3]
}

/**
 * Generate 3 objects based on times, fKey and fValue
 * @param {[Number, Number, Number]} times - sizes of arrays (for small, medium and large)
 * @param {*} fKey - function that takes Number (index of iteration) and returns a key
 * @param {*} fValue - function that takes Number (index of iteration), key (returns from fKey) and returns a value
 */
const generateObjects = (
  times = [1e4, 1e5, 1e6],
  fKey = i => i,
  fValue = () => Math.random() * 1e6 + 1e5
) => {
  const [small, medium, large] = times
  let big1 = {}
  let big2 = {}
  let big3 = {}

  for (let i = 0; i < large; i++) {
    const key = fKey(i)
    const value = fValue(i, key)
    if (i < small) {
      big1[key] = value
    }
    if (i < medium) {
      big2[key] = value
    }
    big3[key] = value
  }

  return [big1, big2, big3]
}

const generateNestedObjects = (
  times = TIME_1M,
  fValue = () => Math.random() * 1e6 + 1e5
) => {
  let objS = {}
  let objM = {}
  let objL = {}

  const [small, medium, big] = times

  for (let i = 0; i < big; i++) {
    if (i < small) {
      objS = { [i]: objS }
    }
    if (i < medium) {
      objM = { [i]: objM }
    }
    objL = { [i]: objL }
  }

  return [objS, objM, objL]
}

const getRandomNumberArrays = () => {
  // TODO: replace with array generation
  let big1 = []
  let big2 = []
  let big3 = []
  for (let i = 0; i < 100000; i++) {
    const element = Math.random() * 1e6 + 1e5
    if (i < 1000) {
      big1.push(element)
    }
    if (i < 10000) {
      big2.push(element)
    }
    big3.push(element)
  }

  const sets = [
    [ big1 ],
    [ big2 ],
    [ big3 ]
  ]

  return {
    type: TYPE_100K,
    argss: sets
  }
}

module.exports = {
  // functions
  generateArrays,
  generateObjects,
  generateNestedObjects,
  getRandomNumberArrays,
  // constants
  times: {
    TIME_1M,
    TIME_100K,
    TIME_10K,
    TIME_1K
  },
  types: {
    TYPE_1M,
    TYPE_100K,
    TYPE_10K,
    TYPE_1K
  }
}
