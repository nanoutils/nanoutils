const {
  generators: { getArrays },
  // generators: { getObjects },
  times: { TIMES_1M },
  types: { TYPE_1M }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_1M)
  // const [small, medium, big] = getObjects(TIMES_1M)
  /*
  TIMES.md
  | map             | nano  |      0.85ms |      22.55ms |      396.27ms |
  |                 | ramda |      0.56ms |      22.91ms |      395.41ms |
  |                 | diff  |     +0.29ms |      -0.36ms |       +0.86ms |
  |                 |       |     +52.03% |       -1.61% |        +0.22% |
  | --------------- | ----- | ----------- | ------------ | ------------- |

  map.json
  [[[0.8707238098978997,0.5963011005520821],[22.510142067968847,22.959692941606043],[389.1997743296623,399.95139368981125]],[[0.8463421785831451,0.5597281089425087],[22.631471371054648,22.998019271194934],[403.3997652801871,393.06309453964235]],[[0.828916128873825,0.5186688277125359],[22.49665977180004,22.768989569544793],[396.21079459100963,393.22074897974727]]]
*/
  const mapF = a => a + 1

  return {
    type: TYPE_1M,
    argss: [
      [mapF, small],
      [mapF, medium],
      [mapF, big]
    ]
  }
}
