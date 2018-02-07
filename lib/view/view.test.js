import lens from '../lens';
import view from '.';

const myObj = {
  a: 2
}
const myLens = lens(myObj => myObj.a)

test('correctly returns value by lens getter', () => {
  expect(view(myLens, myObj)).toBe(2)
})
