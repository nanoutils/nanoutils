import propIs from '../../cjs/propIs'

it('returns true if type is identical to value', () => {
  const truthy = [
    { type: Number, value: 1 },
    { type: String, value: 'two' },
    { type: Boolean, value: true },
    { type: Number, value: NaN },
    { type: Object, value: {} },
    { type: Object, value: [] },
    { type: Array, value: [] },
    { type: Function, value: (x) => x },
  ]
  const answers = truthy.map((obj) => propIs(obj.type, 'value', obj))

  expect(answers).toEqual(new Array(truthy.length).fill(true))
})

it('returns false otherwise', () => {
  const falsy = [
    { type: Number, value: undefined },
    { type: Boolean, value: null },
    { type: Function, value: 1 },
    { type: Array, value: {} },
  ]
  const answers = falsy.map((obj) => propIs(obj.type, 'value', obj))

  expect(answers).toEqual(new Array(falsy.length).fill(false))
})
