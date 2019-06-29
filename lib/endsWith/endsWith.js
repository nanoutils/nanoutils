import equals from '../equals/equals'

export default function endsWith(suffix, list) {
  return (
    Array.isArray(suffix) && Array.isArray(list) ||
    typeof suffix === 'string' && typeof list === 'string'
  ) && equals(suffix, list.slice(-suffix.length))
}
