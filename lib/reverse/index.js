export default (data) =>
  typeof data === 'string'
    ? [].slice.call(data).reverse().join('')
    : data.reverse()
