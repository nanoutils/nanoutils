var unzipWith = require('../unzipWith')

module.exports = function unzip(args) {
  return unzipWith(
    args,
    function(arr, cur) {
      return (arr || []).concat(cur)
    },
    []
  )
}
