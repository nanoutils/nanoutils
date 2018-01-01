module.exports = function toPath(str) {
  return typeof str === 'string' ? str.split('.') : str
}
