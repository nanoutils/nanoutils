import pipeP from '../../cjs/pipeP'

const plusOne = num => Promise.resolve(num + 1)
const getNumber = num => Promise.resolve(num)

it('pipes promises from functions', () => {
  const fn = pipeP(getNumber, plusOne)
  fn(1).then(res => {
    expect(res).toBe(2)
  })
})
