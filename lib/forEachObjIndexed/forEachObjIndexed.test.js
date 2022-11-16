import forEachObjIndexed from '../../cjs/forEachObjIndexed'

const obj = { a: 1, b: 2 }

test('loops through array and applies provided function to each element', () => {
  let output = ''
  const fn = (val) => {
    output += val
  }
  const fn2 = (val, key) => {
    output += key
  }

  forEachObjIndexed(fn, obj)
  forEachObjIndexed(fn2, obj)

  expect(output).toBe('12ab')
})

test('provided function receives 3 args: value, key, object itelf', () => {
  let output = ''
  const obj = { a: 1 }
  const fn = (val, key, object) => {
    output += val + key + JSON.stringify(object)
  }

  forEachObjIndexed(fn, obj)

  expect(output).toBe('1a{"a":1}')
})

test('returns originally provided array', () => {
  const fn = (x) => x * 2
  const result = forEachObjIndexed(fn, obj)

  expect(result === obj).toBeTruthy()
})

test('works for docs', () => {
  const obj = { a: 1, b: 4, c: 3 }
  const found = []
  const fill = (value, key) => {
    if (key.charCodeAt(0) - 96 === value) {
      found.push([key, value])
    }
  }

  forEachObjIndexed(fill, obj)
  expect(found).toEqual([
    ['a', 1],
    ['c', 3],
  ])
})
