export default (n, from) => (n <= 0 ? from : from.slice(0, -n))
