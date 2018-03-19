export default function call(fn) {
  return arguments.length > 1
    ? fn.apply(fn, [].slice.call(arguments, 1))
    : function() { return fn.apply(fn, arguments) }
}
