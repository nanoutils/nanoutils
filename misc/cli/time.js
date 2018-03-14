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
  for (let i = 0; i < n; i++) {
    const start = performance.now()
    f(...args)
    const end = performance.now()
    time += end - start
  }
  return time / n
}
const compare = (f1, f2, { args, options: { n = 100 } = {} }) => {
  if (Array.isArray(args)) {
    return [
      execute(f1, { args, n }),
      execute(f2, { args, n })
    ]
  }
  const { f1: args1, f2: args2 } = args
  return [
    execute(f1, { args: args1, n }),
    execute(f2, { args: args2, n })
  ]
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
  const getArgs = require(path.resolve('lib', name, `${name}.performance.js`))
  const { argss, type } = getArgs()
  if (type === 'no_perf') {
    throw new Error(`${name}.performance.js must have data to return`)
  }

  const received = multipleCompare(nuFunction, ramdaFunction, { argss, n })

  return {
    times: received,
    type
  }
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
    if (i === 0 || i % 4 === 0) {
      str += longests.reduce((acc, max) => {
        return acc + ' ' + '-'.repeat(max) + ' |'
      }, '|')
      str += '\n'
    }
  }
  return str
}

const cacheTime = methods => {
  const cachePath = path.resolve('misc', 'cache', 'time.json')
  const cache = require(cachePath)

  const addTimes = (times1, times2) => {
    let times = []
    let len = Math.min(times1.length, times2.length)
    for (let i = 0; i < len; i++) {
      const time1 = times1[i]
      const time2 = times2[i]
      let time = []
      let len2 = Math.min(time1.length, time2.length)
      for (let j = 0; j < len2; j++) {
        time.push(time1[j] + time2[j])
      }
      times.push(time)
    }
    return times
  }

  const meanTimes = (times, n) => {
    const newTimes = []
    for (let i = 0; i < times.length; i++) {
      const time = times[i]
      let newTime = []
      for (let j = 0; j < time.length; j++) {
        newTime.push(time[j] / n)
      }
      newTimes.push(newTime)
    }
    return newTimes
  }

  const updatedMethods = methods.map(({ name, times, ...etc }) => {
    if (!cache[name]) {
      cache[name] = []
    }
    cache[name].push(times)

    let newTimes = cache[name].slice(1).reduce(addTimes, cache[name][0])
    newTimes = meanTimes(newTimes, cache[name].length)

    return {
      name,
      times: newTimes,
      ...etc
    }
  })

  writeFile(
    cachePath,
    JSON.stringify(cache)
  )

  return updatedMethods
}

const groupTimes = methods => {
  return methods.reduce((acc, { name, type, times }) => {
    if (type === 'array_percent' && !acc[type]) {
      acc[type] = [['Method', 'Lib', '0%', '50%', '100%']]
    }
    if (type === 'array_size' && !acc[type]) {
      acc[type] = [['Method', 'Lib', '10000', '100000', '1000000']]
    }
    if (type === 'object_size' && !acc[type]) {
      acc[type] = [['Method', 'Lib', '100', '1000', '100000']]
    }
    if (type === 'find_item' && !acc[type]) {
      acc[type] = [['Method', 'Lib', 'start', 'half', 'end']]
    }
    const nano = times.map(([ t ]) => t.toFixed(2) + 'ms')
    const ramda = times.map(([ _, t ]) => t.toFixed(2) + 'ms')
    const rest = Array(3 - times.length).fill('')
    const absoluteDiff = times.map(([ t1, t2 ]) => {
      const absolute = (t1 - t2).toFixed(2)
      return (t1 > t2 ? '+' : '') + absolute + 'ms'
    })
    const relativeDiff = times.map(([ t1, t2 ]) => {
      const relative = ((t1 - t2) / t2 * 100).toFixed(2)
      return (t1 > t2 ? '+' : '') + relative + '%'
    })
    acc[type] = [
      ...acc[type],
      [name, 'nano', ...nano, ...rest],
      ['', 'ramda', ...ramda, ...rest],
      ['', 'diff', ...absoluteDiff, ...rest],
      ['', '', ...relativeDiff, ...rest]
    ]
    return acc
  }, {})
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
    // Filter non-existing performance methods
    methods = methods.filter(m => {
      return fs.existsSync(path.resolve('lib', m, `${m}.performance.js`))
    })
    // Check time
    methods = methods.map(m => ({
      name: m,
      ...getTimes(m)
    }))
    // Sort alphabetically
    methods.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    // Add already run performance cases
    methods = cacheTime(methods)
    // Create table
    const header = '## Nanoutils method\'s time'
    const grouped = groupTimes(methods)
    const commonTable = Object.keys(grouped).reduce((acc, group) => {
      return [acc, countTable(grouped[group])].join('\n')
    }, header)
    // Draw it in console
    console.log(commonTable)
    // write to file
    writeFile(
      'TIMES.md',
      commonTable
    )
  } catch (error) {
    console.log(error)
  }
}

time()
