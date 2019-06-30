export default function compose(...args) {
  return initVal => args.reduceRight((val, cb) => cb(val), initVal)
}
