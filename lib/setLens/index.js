import curry from '../curry'

export default curry(function setLens(lens, val, from) {
  return lens(from).set(val)
})
