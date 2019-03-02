export default function curry1more(f) {
  return function curried() {
    var args = [].slice.call(arguments)
    return args.length >= 2
      ? f.apply(f, args)
      : function() {
        return f.apply(f, args.concat([].slice.call(arguments)))
      }
  }
}
