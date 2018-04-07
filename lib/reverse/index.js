import toArray from '../toArray'

export default function reverse(data) {
  return typeof data === 'string'
    ? toArray(data)
      .reverse()
      .join('')
    : toArray(data).reverse()
}
