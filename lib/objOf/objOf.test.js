import objOf from '../../cjs/objOf'

it('creates an object with key from 1st arg and value from 2nd', () => {
  expect(objOf('a', 'b')).toEqual({ a: 'b' })
})
