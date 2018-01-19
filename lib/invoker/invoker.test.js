var invoker = require('.')

test('calls method of target object with arguments', () => {
  var sliceFrom = invoker(2, 'slice')
  expect(sliceFrom(6, 8, 'abcdefghijklm')).toEqual('gh')
})
