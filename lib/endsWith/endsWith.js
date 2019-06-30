import equals from '../equals/equals'

export default function endsWith(suffix, list) {
  if (
    Array.isArray(suffix) && Array.isArray(list) ||
    typeof suffix === 'string' && typeof list === 'string'
  ) {
    return equals(suffix, list.slice(-suffix.length))
  }
}
