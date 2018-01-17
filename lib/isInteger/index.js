export default function isInteger(num) {
  return !isNaN(num) && num << 0 === Number(num)
}
