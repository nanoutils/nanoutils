import always from '../always'
import cond from '../cond'
import lt from '../lt'
import reduceBy from '.'
import T from '../T'

const lt_ = than => what => lt(what, than)

it('groups up reduced values by callback from 3rd argument', () => {
  const reduceToNamesBy = reduceBy((names, { name }) => {
    names.push(name)
    return names
  }, [])
  const namesByGrade = reduceToNamesBy(({ score }) => cond([
    [lt_(65), always('E')],
    [lt_(70), always('D')],
    [lt_(80), always('C')],
    [lt_(90), always('B')],
    [T, always('A')]
  ])(score))
  const students = [
    { name: 'Lucy', score: 92 },
    { name: 'Drew', score: 85 },
    { name: 'Bart', score: 62 }
  ]
  expect(namesByGrade(students)).toEqual({
    A: ['Lucy'],
    B: ['Drew'],
    E: ['Bart']
  })
})

it('shallowly clones initial value for groups', () => {
  const initialValue = [{ deepTest: true }]
  const reduceToNamesBy = reduceBy((names, { name }) => {
    names.push(name)
    return names
  }, initialValue)
  const namesByFirstLetter = reduceToNamesBy(({ name }) => name[0].toUpperCase())
  const students = [
    { name: 'Lucy', score: 92 },
    { name: 'Drew', score: 85 },
    { name: 'Bart', score: 62 }
  ]
  const values = Object.values(namesByFirstLetter(students))
  initialValue[0].deepTest = false
  expect(values[0][0].deepTest).toBeFalsy()
  expect(values[1][0].deepTest).toBeFalsy()
  expect(values[2][0].deepTest).toBeFalsy()
})
