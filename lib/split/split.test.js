import split from '../../cjs/split'

it('separates a string by separator', () => {
  expect(split('/', '/usr/local/bin/node')).toEqual([
    '',
    'usr',
    'local',
    'bin',
    'node'
  ])
})

it('returns array of one string if separator is not found', () => {
  const word = 'Hello'

  expect(split('&', word)).toEqual([word])
})
