var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function takeRightWhile(cb, arr) {
  return !arr.length || !cb(arr[arr.length - 1])
    ? []
    : takeRightWhile(cb, toArray(arr).slice(0, -1)).concat([
        arr[arr.length - 1]
      ])
})
