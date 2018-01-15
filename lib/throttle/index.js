export default function throttle(time, fn) {
  var isThrottled = false
  return function() {
    if (isThrottled) return
    fn.apply(fn, arguments)
    isThrottled = true
    setTimeout(function() {
      isThrottled = false
    }, time)
  }
}
