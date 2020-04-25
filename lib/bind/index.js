import curry2 from '../_internal/_curry2'

export default curry2((fn, context) => fn.bind(context))
