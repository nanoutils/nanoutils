const generateObjects = require('../_internal/helpers/performance').generateObjects

module.exports = function() {
  const [small, medium, big] = generateObjects([1e3, 1e4, 1e5])
  const getProp = (obj, length) => Object.keys(obj)[length / 2]

  const sets = [
    [getProp(small, 1e3), small],
    [getProp(medium, 1e4), medium],
    [getProp(big, 1e5), big]
  ]

  return {
    argss: sets,
    type: 'object_size_1e5'
  }
}
