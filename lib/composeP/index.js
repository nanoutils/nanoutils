export default (initVal, ...args) => args.reduceRight((a, b) => (...args2) => a(...args2).then(res => b(res)), initVal)
