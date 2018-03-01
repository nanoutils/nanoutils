import _set from '../_internal/_set'

export default function uniq(arr) {
  return _set(arr).values()
}
