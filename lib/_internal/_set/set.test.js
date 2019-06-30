import _set from '../../../cjs/_internal/_set'

test('set creates list of unique elements, no duplicates', () => {
  var list = [1, 2, 3, 1, 2, 4, 5, 5, 6]
  var set = _set(list)
  expect(set.values()).toEqual([1, 2, 3, 4, 5, 6])
})

test('object, arrays and function is compared by ref', () => {
  var func1 = function() { return 'a' }
  var func2 = function() { return 'a' }

  var arr1 = [1, 2]
  var arr2 = [1, 2]

  var obj1 = {}
  var obj2 = {}

  var list = [func1, func1, func2, arr1, arr1, arr2, obj1, obj1, obj2]
  var set = _set(list)

  expect(set.values()).toEqual([func1, func2, arr1, arr2, obj1, obj2])
})

test('set allows to add new values in it', () => {
  var list = [1, 2, 1, 2]
  var set = _set(list)

  expect(set.values()).toEqual([1, 2])

  set.add(1) // add duplicate
  set.add(2) // add duplicate
  set.add(3) // add new

  expect(set.values()).toEqual([1, 2, 3])
})

test('have size property, that returns length of current set', () => {
  var list = [1, 2, 3, 1, 2, 3]
  var set = _set(list)
  expect(set.size).toBe(3)

  set.add(1) // duplicate
  expect(set.size).toBe(3)

  set.add(4) // add new
  expect(set.size).toBe(4)
})

test('have \'has\' property, that checks whether set have such value', () => {
  var func1 = function() { return 'a' }
  var func2 = function() { return 'a' }
  var list = [func1, function() { return 'a' }]
  var set = _set(list)

  expect(set.has(func1)).toBeTruthy()
  expect(set.has(func2)).toBeFalsy()
  expect(set.has(function() { return 'a' })).toBeFalsy()
})

test('could concatenate set with other list', () => {
  var list1 = [1, 2, 3]
  var list2 = [2, 3, 4]
  var set = _set(list1)

  expect(set.concat(list2).values()).toEqual([1, 2, 3, 4])
})

test('return empty array if iterable is undefined or not array', () => {
  var set1 = _set()
  var set2 = _set('hello')

  expect(set1.values()).toEqual([])
  expect(set2.values()).toEqual([])
})

test('supports NaN', () => {
  const list = [NaN, NaN]
  const set = _set(list)

  expect(set.values()).toEqual([NaN])
})
