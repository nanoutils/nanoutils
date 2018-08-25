import lens from '../lens'
import updateLens from '.'

let obj = {
  a: 2
}

test('updates value by lens setter', () => {
  expect(updateLens(
    lens(obj => obj.a, (a, obj) => ({ ...obj, a })),
    i => i + 1, obj
  )).toEqual({ a: 3 })
})
