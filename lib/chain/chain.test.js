import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import chain from '../../cjs/chain'
import head from '../../cjs/head'
import append from '../../cjs/append'

test('it accepts 2 or more arguments', () => {
  expectNumberOfArgs(chain, 2, [(n) => n + 1, [1, 2, 3]])
  expectNumberOfArgs(chain, 3, [append, head, [1, 2, 3]])
})

test('concats function return value to existing list', () => {
  const func1 = (n) => [n, n * 2]
  const func2 = (n) => n * 2
  const arr = [1, 2, 3]

  expect(chain(func1, arr)).toEqual([1, 2, 2, 4, 3, 6])
  expect(chain(func1)(arr)).toEqual([1, 2, 2, 4, 3, 6])
  expect(chain(func2, arr)).toEqual([2, 4, 6])
  expect(chain(func2)(arr)).toEqual([2, 4, 6])
})

test("chains function calls if it's provided as second parameter", () => {
  const arr = [1, 2, 3]

  expect(chain(append, head)(arr)).toEqual([1, 2, 3, 1])
})
