/**
 * Generate 3 arrays based on times and fValue
 * @param {[Number, Number, Number]} times - sizes of arrays (for small, medium and large)
 * @param {*} fValue - function that takes Number (index of iteration) and returns a value
 */
function generateArrays(times = [1e4, 1e5, 1e6], fValue = () => Math.random() * 1e6 + 1e5) {
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
function generateObjects(times = [1e4, 1e5, 1e6], fKey = i => i, fValue = () => Math.random() * 1e6 + 1e5) {
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

function getRandomNumberArrays() {
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
    // 1000
    [ big1 ],
    // 10000
    [ big2 ],
    // 100000
    [ big3 ]
  ]

  return {
    type: '1e4_1e5_1e6',
    argss: sets
  }
}

const TIMES_1e3_1e4_1e5 = [1e3, 1e4, 1e5]
const TIMES_1e4_1e5_1e6 = [1e4, 1e5, 1e6]

module.exports = {
  // functions
  generateArrays,
  generateObjects,
  getRandomNumberArrays,
  // constants
  TIMES_1e3_1e4_1e5,
  TIMES_1e4_1e5_1e6
}
