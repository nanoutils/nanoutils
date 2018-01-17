export default function product(nums) {
  return nums.reduce(function(a, b) {
    return a * Number(b)
  }, 1)
}
