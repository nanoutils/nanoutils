import constructN from '../../cjs/constructN'

test('use a specified number of arguments', () => {
  const Top3 = constructN(3, function () {
    this.list = [].slice.call(arguments)
  })

  expect(Top3('apple')('orange')('banana').list).toEqual([
    'apple',
    'orange',
    'banana',
  ])
})
