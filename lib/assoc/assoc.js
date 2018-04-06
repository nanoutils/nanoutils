import set from '../set'
import lensPath from '../lensPath'

export default function assoc(path, val, obj) {
  return set(lensPath(path), val, obj)
}
