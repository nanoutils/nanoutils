import propIs from '.'

test('returns boolean value, if provided key in object is a instance of provided type', () => {
  const truthy = [
    { type: Number, value: 1 },
    { type: String, value: 'two' },
    { type: Boolean, value: true },
    { type: Number, value: NaN },
    { type: Object, value: {} },
    { type: Object, value: [] },
    { type: Array, value: [] },
    { type: Function, value: (x) => x }
  ]

  const falsy = [
    { type: Number, value: undefined },
    { type: Boolean, value: null },
    { type: Function, value: 1 },
    { type: Array, value: {} }
  ]

  const tAnswers = truthy.map((obj) => propIs(obj.type, 'value', obj))
  const fAnswers = falsy.map((obj) => propIs(obj.type, 'value', obj))

  expect(tAnswers).toEqual(new Array(truthy.length).fill(true))
  expect(fAnswers).toEqual(new Array(falsy.length).fill(false))
})
