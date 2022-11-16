import throttle from '../../cjs/throttle'

it('calls function within a specified time limit', (cb) => {
  let state = { steps: 0 }
  const update = () => state.steps++
  const throttledUpdate = throttle(300, update)

  expect(state.steps).toBe(0)
  throttledUpdate()
  expect(state.steps).toBe(1)

  setTimeout(() => {
    throttledUpdate()
    expect(state.steps).toBe(1)
  }, 100)

  setTimeout(() => {
    throttledUpdate()
    expect(state.steps).toBe(1)
  }, 200)

  setTimeout(() => {
    expect(state.steps).toBe(1)
    throttledUpdate()
    expect(state.steps).toBe(2)
    cb()
  }, 400)
})
