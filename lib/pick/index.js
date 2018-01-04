var curry = require('../curry')

module.exports = curry(function pick(props, obj) {
  return props.reduce(function(nObj, prop) {
    nObj[prop] = obj[prop]
    return nObj
  }, {})
})
