import curry2 from '../_internal/_curry2'

export default curry2((cond, cb) => (d) => cond(d) ? d : cb(d))
