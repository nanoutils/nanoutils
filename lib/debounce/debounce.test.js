import debounce from '../../cjs/debounce'

it('works for docs', (cb) => {
  const click = debounce(200, ({ args, cb }) => {
    console.log(`Click with ${args}`)
    cb()
  })

  click({ args: [1, 2], cb })
  click({ args: [2, 3], cb })
  click({ args: [3, 4], cb })
})
