var lt = require('.')

test('checks if 1st arg is less to 2nd', () => {
  expect(lt(1)(2)).toBeTruthy()
  expect(lt(2)(2)).toBeFalsy()
  expect(lt(3)(2)).toBeFalsy()
})
