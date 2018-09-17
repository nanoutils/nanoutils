export default function isInteger(num) {
  return typeof num === 'number' && !isNaN(num) && num << 0 === Number(num)
}
