export default function composeT(...args) {
  return args.reduceRight((acc, f) => (...args2) => acc(f(...args2)), x => x)
}
