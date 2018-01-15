const curry = require('../curry')

export default curry(function cond(conds, data) {
  return conds.length
    ? conds[0][0](data) ? conds[0][1](data) : cond(conds.slice(1), data)
    : undefined
})
