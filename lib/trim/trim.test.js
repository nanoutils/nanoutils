import trim from '../../cjs/trim'

const originString = '123'
const createString = symbol => `${symbol}${symbol}${originString}${symbol}`

it('removes symbols within a category of white spaces', () => {
  // normal space
  expect(trim(createString(' '))).toBe(originString)
  // nonbreaking space
  expect(trim(createString('\u00A0'))).toBe(originString)
  // byte order mark
  expect(trim(createString('\uFEFF'))).toBe(originString)
  // form feed
  expect(trim(createString('\f'))).toBe(originString)
  // tab
  expect(trim(createString('\t'))).toBe(originString)
  // vertical tab
  expect(trim(createString('\v'))).toBe(originString)
})

it('removes symbols within a category of line terminators', () => {
  // line feed (new line)
  expect(trim(createString('\n'))).toBe(originString)
  // carriage return
  expect(trim(createString('\r'))).toBe(originString)
  // line separator
  expect(trim(createString('\u2028'))).toBe(originString)
  // paragraph separator
  expect(trim(createString('\u2029'))).toBe(originString)
})
