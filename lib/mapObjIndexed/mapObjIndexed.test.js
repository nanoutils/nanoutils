import mapObjIndexed from '../../cjs/mapObjIndexed'

test('maps with keys and object as 2nd and 3rd args', () => {
  const values = { x: 1, y: 2, z: 3 }
  const prependKeyAndDouble = (num, key, obj) => key + num * 2

  expect(mapObjIndexed(prependKeyAndDouble, values)).toEqual({
    x: 'x2',
    y: 'y4',
    z: 'z6',
  })
})
