export default (f) => {
  var cache = {}
  /**
   * Do not replace with arrow function:
   * > JSON.stringify([undefined])
   * '[null]'
   * > JSON.stringify([null])
   * '[null]'
   */
  return () => {
    var key = JSON.stringify(arguments)
    return key in cache ? cache[key] : (cache[key] = f.apply(this, arguments))
  }
}
