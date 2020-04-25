export default (...args) => args.reduceRight((acc, f) => (...args2) => acc(f(...args2)), x => x)
