import identical from '.'

describe('identical', () => {
  it('checks if two plain items are equals', () => {
    expect(identical(1, 1)).toBeTruthy()
    expect(identical('a', 'a')).toBeTruthy()
    expect(identical(true, true)).toBeTruthy()
    expect(identical(undefined, undefined)).toBeTruthy()
    expect(identical(undefined, null)).toBeFalsy()
    expect(identical(1, '1')).toBeFalsy()
  })

  it('checks equality by reference for structured items', () => {
    const obj1 = {}

    expect(identical(obj1, obj1)).toBeTruthy()
    expect(identical({}, {})).toBeFalsy()
    expect(identical([], [])).toBeFalsy()
  })

  it('checks for equality of NaN', () => {
    expect(identical(NaN, NaN)).toBeTruthy()
    expect(identical(NaN, 'NaN')).toBeFalsy()
    expect(identical('NaN', 'NaN')).toBeTruthy()
    expect(identical('NaN', NaN)).toBeFalsy()
  })

  it('checks for equality of +/-0', () => {
    expect(identical(-0, 0)).toBeFalsy()
    expect(identical(0, -0)).toBeFalsy()
    expect(identical(-0, -0)).toBeTruthy()
    expect(identical(0, 0)).toBeTruthy()
  })

  it('checks for equality of +/-Infinity', () => {
    expect(identical(-Infinity, Infinity)).toBeFalsy()
    expect(identical(Infinity, -Infinity)).toBeFalsy()
    expect(identical(-Infinity, -Infinity)).toBeTruthy()
    expect(identical(Infinity, Infinity)).toBeTruthy()
  })

  it('checks numbers', () => {
    expect(identical(0, 5e-324)).toBeFalsy()
    expect(identical(5e-324, 0)).toBeFalsy()
    expect(identical(5e324, Infinity)).toBeTruthy()
    expect(identical(Infinity, 5e324)).toBeTruthy()
    expect(identical(-5e324, -Infinity)).toBeTruthy()
    expect(identical(-Infinity, -5e324)).toBeTruthy()
  })
})
