const pipeT = require('../../cjs/pipeT')
const mapT = require('../../cjs/mapT')
const filterT = require('../../cjs/filterT')
const takeT = require('../../cjs/takeT')
const add = require('../../cjs/add')
const flip = require('../../cjs/flip')
const append = require('../../cjs/append')

const R = require('ramda')

module.exports = function getData() {
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

  const isEven = n => n % 2 === 0
  const takeHalf = arr => takeT(arr.length / 2)(arr)
  const transducer = pipeT(mapT(add(1)), filterT(isEven), takeHalf)
  const rTakeHalf = arr => R.take(arr.length / 2)(arr)
  const rTransducer = R.pipe(R.map(R.add(1)), R.filter(isEven), rTakeHalf)
  const sets = [
    // 1000
    {
      f1: [transducer, flip(append), [], big1],
      f2: [rTransducer, R.flip(R.append), [], big1]
    },
    // 10000
    {
      f1: [transducer, flip(append), [], big2],
      f2: [rTransducer, R.flip(R.append), [], big2]
    },
    // 100000
    {
      f1: [transducer, flip(append), [], big3],
      f2: [rTransducer, R.flip(R.append), [], big3]
    }
  ]

  return {
    type: 'array_size',
    argss: sets
  }
}
