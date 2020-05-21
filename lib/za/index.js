export default (prop) => (a, b) => -prop(a).localeCompare(prop(b))
