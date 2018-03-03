export default function sum(nums) {
  return nums.reduce(function(a, b) {
    return a + +b
  }, 0)
}
