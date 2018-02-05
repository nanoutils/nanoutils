import curry2 from '../_internal/_curry2'

export default curry2(function cond(conds, data) {
  return conds.length
    ? conds[0][0](data) ? conds[0][1](data) : cond(conds.slice(1), data)
    : undefined
})
