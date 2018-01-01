module.exports = function get(lens, from) {
  return lens(from).get()
}
