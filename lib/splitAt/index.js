import curry2 from '../_internal/_curry2'

export default curry2((pos, list) => [list.slice(0, pos), list.slice(pos)])
