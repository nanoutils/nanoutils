import split from '.'

test('separates a string by separator', () => {
  expect(split('/', '/usr/local/bin/node')).toEqual([
    '',
    'usr',
    'local',
    'bin',
    'node'
  ])
})
