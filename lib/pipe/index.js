/* NOTE: To do or not to do it independent on flip+compose? */
var flip = require('../flip')
var compose = require('../compose')

module.exports = flip(compose)
