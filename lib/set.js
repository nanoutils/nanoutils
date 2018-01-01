module.exports = function set(lens, val, from) {
  return lens(from).set(val)
}
