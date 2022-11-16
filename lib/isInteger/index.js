export default (num) =>
  typeof num === 'number' && !isNaN(num) && num << 0 === Number(num)
