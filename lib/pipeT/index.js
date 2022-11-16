export default (...args) =>
  args.reduce(
    (acc, f) =>
      (...args2) =>
        acc(f(...args2)),
    (x) => x,
  )
