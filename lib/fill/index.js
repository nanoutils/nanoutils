import toArray from '../toArray'

export default function(val, start, end) {
  return function(arr) {
    return val !== undefined
      ? toArray(arr).fill(val, start || 0, end || arr.length)
      : arr.slice()
  }
}
