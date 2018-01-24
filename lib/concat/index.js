import curry from '../curry'
import toArray from '../toArray'

export default curry(function concat(arg) {
  return toArray(arguments).slice(1).reduce(function(acc, item) {
    return acc.concat(item)
  }, arg)
})
