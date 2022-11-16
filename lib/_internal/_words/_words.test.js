import _words from '../../../cjs/_internal/_words'

it('returns nothing', () => {
  const emptyPhrase = ''
  const words = _words(emptyPhrase)

  expect(words.length).toEqual(0)
})

it('returns words in a string', () => {
  const phrase = 'You only lose when you give up.'
  const words = _words(phrase)

  expect(words.length).toEqual(7)
})

it(`splits words by '-', '_', ' '`, () => {
  const phrase = 'we_support nano-hype'
  const words = _words(phrase)

  expect(words).toEqual(['we', 'support', 'nano', 'hype'])
})

it(`removes incorrect symbols`, () => {
  const phrase = 'Participation in program «Do it now»'
  const words = _words(phrase)

  expect(words).toEqual(['Participation', 'in', 'program', 'Do', 'it', 'now'])
})

it(`supports Cyrillic`, () => {
  const phrase = 'Участие в программе «Кто хочет стать миллионёром»'
  const words = _words(phrase)

  expect(words).toEqual([
    'Участие',
    'в',
    'программе',
    'Кто',
    'хочет',
    'стать',
    'миллионёром',
  ])
})

it('splits by upper case letters (Latin)', () => {
  const phrase = 'ParticipationInProgramme'
  const words = _words(phrase)

  expect(words).toEqual(['Participation', 'In', 'Programme'])
})

it('splits by upper case letters (Cyrrilic)', () => {
  const phrase = 'УчастиеВ_Программе'
  const words = _words(phrase)

  expect(words).toEqual(['Участие', 'В', 'Программе'])
})
