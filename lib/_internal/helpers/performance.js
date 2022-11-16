const TIME_1M = 1e6
const TIME_100K = 1e5
const TIME_10K = 1e4
const TIME_1K = 1e3
const TIME_100 = 1e2
const TIME_10 = 10
const TIME_1 = 1

const TIMES_1M = [TIME_10K, TIME_100K, TIME_1M]
const TIMES_100K = [TIME_1K, TIME_10K, TIME_100K]
const TIMES_10K = [TIME_100, TIME_1K, TIME_10K]
const TIMES_1K = [TIME_10, TIME_100, TIME_1K]
const TIMES_100 = [TIME_1, TIME_10, TIME_100]

const TYPE_1M = '1m'
const TYPE_100K = '100k'
const TYPE_10K = '10k'
const TYPE_1K = '1k'
const TYPE_100 = '100'
const TYPE_PERCENT = 'percent'
const TYPE_SHE = 'start_half_end'

const arrify = (value) => (Array.isArray(value) ? value : [value, value, value])

const RANDOM_VALUE_GEN = () => Math.random() * TIME_1M + TIME_100K
const RANDOM_VALUES_GEN = () => arrify(RANDOM_VALUE_GEN())

const NESTED_OBJ_VALUE_GEN = (obj, i) => ({ [i]: obj })
const NESTED_ARR_VALUE_GEN = (_, arrs) =>
  arrs.map((arr) => [arr, RANDOM_VALUE_GEN()])

/**
 * Generate 3 arrays of the same length based on time and fValue
 * @param {Number} time - size of all arrays
 * @param {Function} fValues - function that takes Number (index of iteration) and returns a 3-value generator
 */
const getSameLengthArrays = (time = TIME_1M, fValues = RANDOM_VALUES_GEN) => {
  const arr1 = []
  const arr2 = []
  const arr3 = []

  for (let i = 0; i < time; i++) {
    const [value1, value2, value3] = arrify(fValues(i))
    arr1.push(value1)
    arr2.push(value2)
    arr3.push(value3)
  }

  return [arr1, arr2, arr3]
}

/**
 * Generate 3 arrays based on times and fValue
 * @param {[Number, Number, Number]} times - sizes of arrays (for small, medium and large)
 * @param {Function} fValues - function that takes Number (index of iteration) and returns a 3-value generator
 */
const getArrays = (
  [small, medium, large] = TIMES_1M,
  fValues = RANDOM_VALUES_GEN,
) => {
  const big1 = []
  const big2 = []
  const big3 = []

  for (let i = 0; i < large; i++) {
    const [value1, value2, value3] = arrify(fValues(i))
    if (i < small) {
      big1.push(value1)
    }
    if (i < medium) {
      big2.push(value2)
    }
    big3.push(value3)
  }

  return [big1, big2, big3]
}

/**
 * Generate 3 objects of the same length based on time, fKey and fValue
 * @param {Number} time - sizes of arrays' keys of all objects
 * @param {*} fKeys - function that takes Number (index of iteration) and returns an array of 3 keys
 * @param {*} fValues - function that takes Number (index of iteration), key (returns from fKey) and returns a 3-value generator
 */
const getSameLengthObjects = (
  time = TIME_1M,
  fKeys = (i) => i,
  fValues = RANDOM_VALUES_GEN,
) => {
  const obj1 = {}
  const obj2 = {}
  const obj3 = {}

  for (let i = 0; i < time; i++) {
    const [key1, key2, key3] = arrify(fKeys(i))
    const [value1, value2, value3] = arrify(fValues(i, [key1, key2, key3]))
    obj1[key1] = value1
    obj2[key2] = value2
    obj3[key3] = value3
  }

  return [obj1, obj2, obj3]
}

/**
 * Generate 3 objects based on times, fKey and fValue
 * @param {[Number, Number, Number]} times - sizes of arrays' keys of every object (for small, medium and large)
 * @param {*} fKeys - function that takes Number (index of iteration) and returns an array of 3 keys
 * @param {*} fValues - function that takes Number (index of iteration), key (returns from fKey) and returns a 3-value generator
 */
const getObjects = (
  [small, medium, large] = TIMES_1M,
  fKeys = (i) => i,
  fValues = RANDOM_VALUES_GEN,
) => {
  const big1 = {}
  const big2 = {}
  const big3 = {}

  for (let i = 0; i < large; i++) {
    const [key1, key2, key3] = arrify(fKeys(i))
    const [value1, value2, value3] = arrify(fValues(i, [key1, key2, key3]))
    if (i < small) {
      big1[key1] = value1
    }
    if (i < medium) {
      big2[key2] = value2
    }
    big3[key3] = value3
  }

  return [big1, big2, big3]
}

const getNestedObjects = (times = TIMES_1M, fValues = NESTED_OBJ_VALUE_GEN) => {
  let objS = {}
  let objM = {}
  let objL = {}

  const [small, medium, big] = times

  for (let i = 0; i < big; i++) {
    const [fValue1, fValue2, fValue3] = arrify(fValues)
    if (i < small) {
      objS = fValue1(objS, i)
    }
    if (i < medium) {
      objM = fValue2(objM, i)
    }
    objL = fValue3(objL, i)
  }

  return [objS, objM, objL]
}

const getNestedArrays = (times = TIMES_1M, fValues = NESTED_ARR_VALUE_GEN) => {
  let arrS = []
  let arrM = []
  let arrL = []

  const [small, medium, big] = times

  for (let i = 0; i < big; i++) {
    const [arr1, arr2, arr3] = arrify(fValues(i, [arrS, arrM, arrL]))
    if (i < small) {
      arrS = arr1
    }
    if (i < medium) {
      arrM = arr2
    }
    arrL = arr3
  }

  return [arrS, arrM, arrL]
}

const getRandomNumberArrays = () => {
  // TODO: replace with array generation
  const big1 = []
  const big2 = []
  const big3 = []
  for (let i = 0; i < 100000; i++) {
    const element = RANDOM_VALUE_GEN()
    if (i < 1000) {
      big1.push(element)
    }
    if (i < 10000) {
      big2.push(element)
    }
    big3.push(element)
  }

  const sets = [[big1], [big2], [big3]]

  return {
    type: TYPE_100K,
    argss: sets,
  }
}

const triple = (value) => [value, value, value]
const getRandom = (from, length) => Math.random() * length + from

module.exports = {
  // functions
  generators: {
    getArrays,
    getObjects,
    getNestedArrays,
    getNestedObjects,
    getRandomNumberArrays,
    getSameLengthArrays,
    getSameLengthObjects,
  },
  // constants
  time: {
    TIME_1M,
    TIME_100K,
    TIME_10K,
    TIME_1K,
    TIME_100,
    TIME_10,
    TIME_1,
  },
  times: {
    TIMES_1M,
    TIMES_100K,
    TIMES_10K,
    TIMES_1K,
    TIMES_100,
  },
  types: {
    TYPE_1M,
    TYPE_100K,
    TYPE_10K,
    TYPE_1K,
    TYPE_100,
    TYPE_PERCENT,
    TYPE_SHE,
  },
  utils: {
    triple,
    getRandom,
  },
}
