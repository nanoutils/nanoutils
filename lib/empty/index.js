export default function empty(value) {
  if (value.constructor.empty) return value.constructor.empty
  if (Array.isArray(value)) return []
  var type = typeof value
  if (type === 'object') return {}
  if (type === 'string') return ''
  return ((...args) => args)()
}
