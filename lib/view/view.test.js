import lens from '../../cjs/lens'
import view from '../../cjs/view'

const myObj = {
  a: 2,
}
const myLens = lens((myObj) => myObj.a)

it('returns value by lens getter', () => {
  expect(view(myLens, myObj)).toBe(2)
})
