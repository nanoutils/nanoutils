const { shallowCloneObjectAndArrays } = require('.')

test('shallow copies an object', () => {
  const object = { a: { a2: 1 } }
  const shallowCopyObject = shallowCloneObjectAndArrays(object)
  expect(object).toEqual(shallowCopyObject)
  object.a.a2 = 2
  expect(object.a.a2).toBe(shallowCopyObject.a.a2)
})

test('shallow copies an object', () => {
  const array = [[1]]
  const shallowCopyArray = shallowCloneObjectAndArrays(array)
  expect(array).toEqual(shallowCopyArray)
  array[0][0] = 2
  expect(array[0][0]).toBe(shallowCopyArray[0][0])
})
