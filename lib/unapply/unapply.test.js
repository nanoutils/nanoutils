import unapply from '.'

test('call cb with arguments from array', () => {
  var a = unapply(function() {
    return Array.prototype.slice.call(arguments)
  })
  expect(a(1, 2, 3)).toEqual([[1, 2, 3]])
})
