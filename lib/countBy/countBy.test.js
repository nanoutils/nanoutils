import countBy from '.'
import identity from '../identity'

test('counts the elements of list groupping by value of callback', () => {
  const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2]
  expect(countBy(Math.floor)(numbers)).toEqual({ '1': 3, '2': 2, '3': 1 })
})

test('works for docs', () => {
  const isPermutation = (str1, str2) => {
    const getRepeations = countBy(identity)
    const repeats1 = getRepeations([...str1])
    const repeats2 = getRepeations([...str2])
    const keys1 = Object.keys(repeats1)
    const keys2 = Object.keys(repeats2)

    if (keys1.length !== keys2.length) {
      return false
    }
    return keys1.filter(key => repeats2[key] === repeats1[key]).length === keys1.length
  }

  expect(isPermutation('str', 'tsr')).toBeTruthy()
  expect(isPermutation('str', 'trsss')).toBeFalsy()
})
