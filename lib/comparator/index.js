export default (cb) => (a, b) => cb(a, b) ? -1 : cb(b, a) ? 1 : 0
