import filter from '../filter'
import reject from '../reject'

export default function partition(predicate, object) {
  return [
    filter(predicate, object),
    reject(predicate, object)
  ]
}
