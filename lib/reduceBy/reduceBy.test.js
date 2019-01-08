import always from '../always'
import cond from '../cond'
import lt from '../lt'
import reduceBy from '.'
import T from '../T'

const lt_ = than => what => lt(what, than)

it('groups up reduced values by callback from 3rd argument', () => {
  const reduceToNamesBy = reduceBy((names, { name }) => names.concat(name), [])
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
