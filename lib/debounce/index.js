/**
 * Debounce
 * @param {number} time Time in ms
 * @param {Function} fn Function that need to be debounced
 * @param {Object} options Options object
 * @param {boolean} [options.leading=true] When true, fn will be called on the leading edge, otherwise - after timeout
 */
export default function debounce(time, fn, opts) {
  opts = opts || {}
  var timer = null

  function call(args) {
    timer = setTimeout(function() {
      fn.apply(fn, args)
      timer = null
    }, time)
  }

  function clear() {
    timer = setTimeout(run.cancel, time)
  }

  function run() {
    if (!timer) {
      if (opts.leading) {
        fn.apply(fn, arguments)
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
