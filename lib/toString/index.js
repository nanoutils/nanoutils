/* eslint-disable */

const toString = (value) => {
  var result = ''
  switch (Object.prototype.toString.call(value)) {
    case '[object Date]':
      return 'new Date(' + JSON.stringify(value) + ')'
    case '[object Object]':
      var keys = Object.keys(value)
      for (var i = 0; i < keys.length; i++) {
        if (i !== 0) result += ', '
        result += '"' + keys[i] + '": ' + toString(value[keys[i]])
      }
      return '{' + result + '}'
    case '[object Arguments]':
      for (var i = 0; i < value.length; i++) {
        if (i !== 0) result += ', '
        result += toString(value[i])
      }
      return '(function() { return arguments; }(' + result + '))'
    case '[object Array]':
      for (var i = 0; i < value.length; i++) {
        if (i !== 0) result += ', '
        result += toString(value[i])
      }
      return '[' + result + ']'
    default:
      return value + ''
  }
}

export default toString
