export default function debounce(time, fn) {
  var isCalling = false
  return function() {
    if (isCalling) return;
    isCalling = true
    setTimeout(
      function() {
        fn.apply(fn, arguments)
        isCalling = false
      },
      time,
      arguments
    )
  }
}
