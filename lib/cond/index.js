export default function cond(conditions) {
  return function(value) {
    for (var i = 0; i < conditions.length; i++) {
      if (conditions[i][0](value)) return conditions[i][1](value)
    }
  }
}
