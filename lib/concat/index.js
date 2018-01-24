import curry from '../curry'

export default curry(function concat(arg) {
  return [].slice.call(arguments, 1).reduce(function(acc, item) {
    return acc.concat(item)
  }, Array.isArray(arg) ? arg.slice(0) : arg)
})
