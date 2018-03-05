import reduceBy from '.'

test('no tests yet', () => {
  var reduceToNamesBy = reduceBy((acc, student) => acc.concat(student.name), [])
  var namesByGrade = reduceToNamesBy(function(student) {
    var score = student.score
    return score < 65
      ? 'F'
      : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A'
  })
  var students = [
    { name: 'Lucy', score: 92 },
    { name: 'Drew', score: 85 },
    { name: 'Bart', score: 62 }
  ]
  expect(namesByGrade(students)).toEqual({
    A: ['Lucy'],
    B: ['Drew'],
    F: ['Bart']
  })
})
