const { generateArrays, TIMES_1e3_1e4_1e5 } = require('../_internal/helpers/performance')

const pipeT = require('../../cjs/pipeT')
const mapT = require('../../cjs/mapT')
const filterT = require('../../cjs/filterT')
const takeT = require('../../cjs/takeT')
const add = require('../../cjs/add')
const flip = require('../../cjs/flip')
const append = require('../../cjs/append')

const R = require('ramda')

module.exports = function getData() {
  const getRandom = () => Math.random() * 1e6 + 1e5
  const [big1, big2, big3] = generateArrays(TIMES_1e3_1e4_1e5, getRandom)

  const isEven = n => n % 2 === 0
  const takeHalf = arr => takeT(arr.length / 2)(arr)
  const transducer = pipeT(mapT(add(1)), filterT(isEven), takeHalf)
  const rTakeHalf = arr => R.take(arr.length / 2)(arr)
  const rTransducer = R.pipe(R.map(R.add(1)), R.filter(isEven), rTakeHalf)

  return {
    type: '1e3_1e4_1e5',
    argss: [
      {
        f1: [transducer, flip(append), [], big1],
        f2: [rTransducer, R.flip(R.append), [], big1]
      },
      {
        f1: [transducer, flip(append), [], big2],
        f2: [rTransducer, R.flip(R.append), [], big2]
      },
      {
        f1: [transducer, flip(append), [], big3],
        f2: [rTransducer, R.flip(R.append), [], big3]
      }
    ]
  }
}
