export default function clamp(min, max, val) {
  return val < min ? min : val > max ? max : val
}
