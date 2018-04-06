import filter from '../filter/filter'
import reject from '../reject/reject'

export default function partition(predicate, object) {
  return [
    filter(predicate, object),
    reject(predicate, object)
  ]
}
