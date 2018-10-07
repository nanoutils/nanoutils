export default function call(callback) {
  return arguments.length > 1
    ? callback.apply(callback, [].slice.call(arguments, 1))
    : function() { return callback.apply(callback, arguments) }
}
