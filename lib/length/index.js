export default (value) =>
  value != null && value.length === +value.length
    ? value.length
    : NaN
