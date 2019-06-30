import unapply from '../../cjs/unapply'
import mean from '../../cjs/mean'

it('calls cb with arguments from array', () => {
  expect(unapply(mean)(1, 2, 3)).toEqual(2)
})
