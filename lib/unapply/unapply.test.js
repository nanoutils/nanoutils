import unapply from '.'
import mean from '../mean'

it('calls cb with arguments from array', () => {
  expect(unapply(mean)(1, 2, 3)).toEqual(2)
})
