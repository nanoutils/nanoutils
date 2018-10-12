/**
 * Debounce
 * @param {number} time Time in ms
 * @param {Function} callback Function that need to be debounced
 * @param {Object} options Options object
 * @param {boolean} [options.leading=true] When true, fn will be called on the leading edge, otherwise - after timeout
 */
export default function debounce(time, callback, options) {
  options = options || {}
  var timer = null

  function call(args) {
    timer = setTimeout(function() {
      callback.apply(callback, args)
      timer = null
    }, time)
  }

  function clear() {
    timer = setTimeout(run.cancel, time)
  }

  function run() {
    if (!timer) {
      if (options.leading) {
        callback.apply(callback, arguments)
        clear()
      } else {
        call(arguments)
      }
    } else {
      clearTimeout(timer)
      call(arguments)
    }
  }

  run.cancel = function() {
    clearTimeout(timer)
    timer = null
  }

  return run
}
