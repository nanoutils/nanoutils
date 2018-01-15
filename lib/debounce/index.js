export default function debounce(time, fn) {
  var isCalling = false
  return function() {
    if (isCalling) return undefined
    isCalling = true
    setTimeout(
      function(args) {
        fn.apply(fn, args)
        isCalling = false
      },
      time,
      arguments
    )
  }
}
