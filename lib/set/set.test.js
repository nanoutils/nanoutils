import lens from '../lens'
import set from '.'

const myObj = {
  a: 1
}

const myLens = lens(obj => obj.a, (a, obj) => ({ ...obj, a }))

test('sets value by lens setter', () => {
  expect(set(myLens, 2, myObj)).toEqual({ a: 2 })
})
