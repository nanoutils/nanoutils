const { performance } = require('perf_hooks')
const fs = require('fs')
const path = require('path')
const util = require('util')
const minimist = require('minimist')

const readdir = util.promisify(fs.readdir)
const writeFile = util.promisify(fs.writeFile)
const args = minimist(process.argv.slice(2))

function getNanoutilsFunction(name) {
  return require(path.resolve('cjs', name, 'index.js'))
}
function getRamdaFunction(name) {
  return require(path.resolve('node_modules/ramda/src', `${name}.js`))
}

const execute = (f, { args, n }) => {
  let time = 0
  let results = []
  for (let i = 0; i < n; i++) {
    const start = performance.now()
    const result = f(...args)
    const end = performance.now()
    time += end - start
    results.push(result)
  }
  return {
    results,
    time: time / n
  }
}
const compare = (f1, f2, { args, options: { n = 100 } = {} }) => {
  const executed1 = execute(f1, { args, n })
  const executed2 = execute(f2, { args, n })
  return [executed1, executed2]
}
const multipleCompare = (f1, f2, { argss, options }) => {
  let times = []
  for (let i = 0; i < argss.length; i++) {
    const args = argss[i]
    times.push(compare(f1, f2, { args, options }))
  }
  return times
}

const unionTime = (f1, f2) => {
  let big1 = []
  let big2 = []
  let big3 = []
  for (let i = 0; i < 1000; i++) {
		const element = i + 'aaaaa'
    big1.push(element)
    big2.push(i < 500 ? element : element + 'a')
    big3.push(element + 'a')
  }

  const sets = [
    // 50% common elements
    [ big1, big2 ],
    // no common
    [ big1, big3 ],
    // all common
    [ big1, big1 ]
	]
	
	const times = 1000;
  const expected = [
    f1(big1, big2),
    f1(big1, big3),
    big1
  ]
  const received = multipleCompare(f1, f2, {
    argss: sets,
    n: times
  })

  return { time: received.map(([ r1, r2 ]) => [ r1.time, r2.time ]) }
}

// TODO: to complete for all functions
async function time() {
  try {
    // Get lib path
    const lib = path.resolve('cjs')
    // Read all methods
    let methods = await readdir(lib)
    // Methods without internal helpers
    methods = methods.filter(m => m !== '_internal')
    // Chosen methods from args
    methods = args._.length
      ? methods.filter(m => args._.includes(m))
      : methods
    // Interrupt without methods
    if (!methods.length) {
      throw new TypeError('No methods matched')
    }
    // Check time
    
    console.log(JSON.stringify(methods))
  } catch (error) {
    console.log(error)
  }
}

const nuUnion = getNanoutilsFunction('union')
const rUnion = getRamdaFunction('union')
const header = '## Nanoutils method\'s time'
const table = [
  ['Method', 'Lib', '0%', '50%', '100%'],
  ...[unionTime(nuUnion, rUnion)].reduce((acc, { time }) => {
    const nano = time.map(([ t ]) => t.toFixed(2) + 'ms')
    const ramda = time.map(([ _, t ]) => t.toFixed(2) + 'ms')
    const diff = time.map(([ t1, t2 ]) => (t1 > t2 ? '+' : '') + (t1 - t2).toFixed(2) + 'ms')
    return [
      ...acc, 
      ['union', 'nano', ...nano],
      ['', 'ramda', ...ramda],
      ['', 'diff', ...diff],
    ]
  }, [])
]

const countTable = table => {
  const rowN = table.length
  const colN = table[0].length
  const longests = []
  // count longest column length
  for (let i = 0; i < colN; i++) {
    longests[i] = table.reduce((acc, row) => {
      return acc > row[i].length ? acc : row[i].length
    }, 0)
  }
  let str = ''
  for (let i = 0; i < rowN; i++) {
    str += '|'
    for (let j = 0; j < colN; j++) {
      let text = `${table[i][j]}`
      text = j > 1
        ? text.padStart(longests[j])
        : text.padEnd(longests[j])
      str += ` ${text} |`
    }
    str += '\n'
    if (i === 0 || i % 3 === 0) {
      str += longests.reduce((acc, max) => {
        return acc + ' ' + '-'.repeat(max) + ' |'
      }, '|')
      str += '\n'
    }
  }
  return str
}

console.log([header, countTable(table)].join('\n'))

writeFile(
  'TIMES.md',
  [header, countTable(table)].join('\n')
)
