/**
 * Debounce
 * @param {number} time Time in ms
 * @param {Function} fn Function that need to be debounced
 * @param {Object} options Options object
 * @param {boolean} [options.leading=true] When true, fn will be called on the leading edge, otherwise - after timeout
 */
export default (time, fn, opts) => {
  opts = opts || {}
  var timer = null

  var call = (args) => {
    timer = setTimeout(() => {
      fn.apply(fn, args)
      timer = null
    }, time)
  }

  var clear = () => {
    timer = setTimeout(run.cancel, time)
  }

  /**
   * Do not replace with arrow function! It uses `arguments`
   * and ...args transpilation is still quite expensive for cjs
   */
  var run = function () {
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

  run.cancel = () => {
    clearTimeout(timer)
    timer = null
  }

  return run
}
