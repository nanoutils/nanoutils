export default function reverse(data) {
  return typeof data === 'string'
    ? [].slice.call(data).reverse().join('')
    : data.reverse()
}
