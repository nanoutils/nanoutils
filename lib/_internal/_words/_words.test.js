import _words from '.'

it('returns words in a string', () => {
  const phrase = 'You only lose when you give up.'
  const words = _words(phrase)

  expect(words.length).toEqual(8)
})

it(`splits words by '-', '_', ' '`, () => {
  const phrase = 'we_support nano-hype'
  const words = _words(phrase)

  expect(words).toEqual(['we', 'support', 'nano', 'hype'])
})
