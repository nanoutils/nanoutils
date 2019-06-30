export default function partial(cb, args) {
  return (...args2) => cb(...[...args, ...args2].slice(0, cb.length))
}
