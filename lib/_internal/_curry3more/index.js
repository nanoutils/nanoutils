export default function curry3more(f) {
  return function curried() {
    var args = [].slice.call(arguments)
    return args.length >= 3
      ? f.apply(f, args)
      : function() {
        var args2 = [].slice.call(arguments)
        return args.length + args2.length >= 3
          ? f.apply(f, args.concat(args2))
          : function() {
            return f.apply(f, args.concat(args2).concat([].slice.call(arguments)))
          }
      }
  }
}
