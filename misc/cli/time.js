const { performance } = require('perf_hooks')
const fs = require('fs')
const path = require('path')
const util = require('util')
const minimist = require('minimist')

const readdir = util.promisify(fs.readdir)
const writeFile = util.promisify(fs.writeFile)
const args = minimist(process.argv.slice(2))

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
const getTimes = (name, n = 1000) => {
  const nuFunction = require(path.resolve('cjs', name, 'index.js'))
  const ramdaFunction = require(path.resolve('node_modules/ramda/src', `${name}.js`))
  const getTime = require(path.resolve('lib', name, `${name}.performance.js`))
  const argss = getTime(nuFunction, ramdaFunction)

  const expected = argss.map(args => ramdaFunction(...args))
  const received = multipleCompare(nuFunction, ramdaFunction, { argss, n })
  
  return received.map(([ r1, r2 ]) => [ r1.time, r2.time ])
}

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
    methods = methods.map(m => ({
      name: m,
      time: getTimes(m)
    }))
    // Sort alphabetically
    methods.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    // Create table
    const header = '## Nanoutils method\'s time'
    const table = [
      ['Method', 'Lib', '0%', '50%', '100%'],
      ...methods.map(({ time }) => time).reduce((acc, time) => {
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
    const drawing = [header, countTable(table)].join('\n')
    // Draw it in console
    console.log(drawing)
    // write to file
    writeFile(
      'TIMES.md',
      [header, countTable(table)].join('\n')
    )
  } catch (error) {
    console.log(error)
  }
}

time()
