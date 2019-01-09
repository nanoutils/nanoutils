import { expectNumberOfArgs } from '../_internal/_test'
import __ from '../__'
import clone from '.'

it('accepts exact 1 argument', () => {
  expectNumberOfArgs(clone, 1, [new Date()])
})

it('does not clone functions', () => {
  const f = function b() {}
  expect(clone(f)).toBe(f)
})

it('does not clone placeholders', () => {
  const placeholder = __
  expect(clone(placeholder)).toBe(__)
})

it('clones dates', () => {
  const date = new Date()
  const clonedDate = clone(date)
  clonedDate.setHours(15)
  expect(clonedDate).not.toBe(date)
})

it('clones regular expressions', () => {
  const regularExpression = new RegExp()
  const clonedRegularExpression = clone(regularExpression)
  expect(clonedRegularExpression).not.toBe(regularExpression)
})

it('clones arrays', () => {
  const array = [1, 'hello', [null, 'lalka']]
  let clonedArray = clone(array)
  clonedArray[2][0] = 'mutated'
  expect(array[2][0]).toBeNull()
  clonedArray = clonedArray.map(i => 'mutated')
  expect(array.every(i => i !== 'mutated')).toBeTruthy()
})

it.only('clones objects', () => {
  const object = { a: 1, b: { c: 1, d: [1, 2, 3] } }
  const resultObject = { a: 1, b: { c: 1, d: [1, 2, 3] } }
  const clonedObject = clone(object)
  clonedObject.a = 2
  clonedObject.b.c = 'asdf'
  clonedObject.b.d[1] = 4
  expect(object).toEqual(resultObject)
})

it('clones circular data', () => {
  const circularObject = { foo: 'bar' }
  circularObject.baz = circularObject
  const clonedCircularObject = { foo: 'bar' }
  clonedCircularObject.baz = clonedCircularObject
  expect(clone(circularObject)).toEqual(clonedCircularObject)
})

it('clones classes instances', () => {
  const ClassExample = function(a) {
    this.a = a
  }
  const classInstance = new ClassExample(1)
  const clonedClassInstance = clone(classInstance)
  expect(clonedClassInstance).toEqual(classInstance)
  expect(clonedClassInstance instanceof ClassExample).toBeTruthy()
})

it('can shallowly clone data', () => {
  const array = [{ name: 'Mike' }]
  const clonedArray = clone(array, false)
  const alex = 'Alex'
  clonedArray.name = alex
  expect(array[0].name).toBe(alex)
})
