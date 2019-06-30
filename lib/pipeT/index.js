export default function pipeT(...args) {
  return args.reduce((acc, f) => (...args2) => acc(f(...args2)), x => x)
}
