export default function composeP(initVal, ...args) {
  return args.reduceRight((a, b) => (...args2) => a(...args2).then(res => b(res)), initVal)
}
