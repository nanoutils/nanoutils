import filter from '../filter/filter'
import reject from '../reject/reject'

export default (predicate, object) => [
  filter(predicate, object),
  reject(predicate, object)
]
