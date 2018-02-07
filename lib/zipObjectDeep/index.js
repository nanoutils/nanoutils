import assoc from '../assoc'

export default function zipObjectDeep(paths, vals) {
  return paths.reduce(function(res, p, i) {
    return assoc(p, vals[i], res)
  }, {})
}
