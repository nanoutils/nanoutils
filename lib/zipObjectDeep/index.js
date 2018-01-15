import set from '../set'

export default function zipObjectDeep(paths, vals) {
  return paths.reduce(function(res, p, i) {
    return set(p, vals[i], res)
  }, {})
}
