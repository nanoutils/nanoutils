export default (...args) => initVal => args.reduceRight((val, cb) => cb(val), initVal)
