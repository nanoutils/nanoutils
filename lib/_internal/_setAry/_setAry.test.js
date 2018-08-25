import setAry from '.'

it('adds nanoLen property to a function', () => {
  var a = function(a, b, c) {
    console.log(a, b, c)
  }
  expect(setAry(3, a).nanoLen).toEqual(3)
})

it('nanoLen should be read-only property', () => {
  var a = function(a, b, c) {
    console.log(a, b, c)
  }
  var b = setAry(3, a)
  expect(() => {
    b.nanoLen = 1337
  }).toThrowError(
    TypeError,
    "Cannot assign to read only property 'nanoLen' of function 'function (a, b, c) {\n\tconsole.log(a, b, c);\n}'"
  )
})
