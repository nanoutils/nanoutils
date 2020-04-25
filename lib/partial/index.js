export default (cb, args) => (...args2) => cb(...[...args, ...args2].slice(0, cb.length))
