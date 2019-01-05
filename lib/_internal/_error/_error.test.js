import { typeErrorWith } from '.'

describe('types', () => {
  test('accepts one type', () => {
    const error1 = `[Nanoutils] addIndex(*, *, array) accepts an array, object given`
    const error2 = typeErrorWith('addIndex', {
      i: 2,
      n: 3,
      key: 'array',
      value: {},
      types: ['array']
    })

    expect(error1).toEqual(error2)
  })

  test('accepts 2 types', () => {
    const error1 = `[Nanoutils] adjust(*, index, *) accepts string and number, boolean given`
    const error2 = typeErrorWith('adjust', {
      i: 1,
      n: 3,
      key: 'index',
      value: true,
      types: ['string', 'number']
    })

    expect(error1).toEqual(error2)
  })

  test('accepts more than 2 types', () => {
    const error1 = `[Nanoutils] adjust(*, index, *) accepts string, number and boolean, object given`
    const error2 = typeErrorWith('adjust', {
      i: 1,
      n: 3,
      key: 'index',
      value: {},
      types: ['string', 'number', 'boolean']
    })

    expect(error1).toEqual(error2)
  })
})

test('uses default key name', () => {
  const error1 = `[Nanoutils] adjust(*, arg2, *) accepts string and number, object given`
  const error2 = typeErrorWith('adjust', {
    i: 1,
    n: 3,
    value: {},
    types: ['string', 'number']
  })

  expect(error1).toEqual(error2)
})

describe('params', () => {
  test('first', () => {
    const error1 = `[Nanoutils] adjust(arg1, *, *) accepts string and number, object given`
    const error2 = typeErrorWith('adjust', {
      i: 0,
      n: 3,
      value: {},
      types: ['string', 'number']
    })

    expect(error1).toEqual(error2)
  })

  test('second', () => {
    const error1 = `[Nanoutils] adjust(*, arg2, *) accepts string and number, object given`
    const error2 = typeErrorWith('adjust', {
      i: 1,
      n: 3,
      value: {},
      types: ['string', 'number']
    })

    expect(error1).toEqual(error2)
  })

  test('third (last)', () => {
    const error1 = `[Nanoutils] adjust(*, *, arg3) accepts string and number, object given`
    const error2 = typeErrorWith('adjust', {
      i: 2,
      n: 3,
      value: {},
      types: ['string', 'number']
    })

    expect(error1).toEqual(error2)
  })
})
