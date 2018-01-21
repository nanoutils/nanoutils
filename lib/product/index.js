export default function product(nums) {
  return nums.reduce(function(a, b) {
    return a * b
  }, 1)
}
