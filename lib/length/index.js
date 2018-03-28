export default function length(value) {
  return value != null && value.length === +value.length
    ? value.length
    : NaN
}
