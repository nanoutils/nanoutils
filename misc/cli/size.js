const fs = require('fs')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const getSize = require('size-limit')
const minimist = require('minimist')

let longestName
const args = minimist(process.argv.slice(2))
const createRow = cols => '║ ' + cols.join(' ║ ') + ' ║'
const formatName = name => chalk.bold(name.padEnd(longestName))
const formatSize = size => `${size}`.padStart(4) + ' B'

Promise
  // Get lib path
  .resolve(path.resolve('lib'))
  // Get list of methods
  .then(util.promisify(fs.readdir))
  // Exclude index.js and _internals
  .then(methods => {
    const exclude = m => !['index.js', '_internal'].includes(m)

    return methods.filter(exclude)
  })
  // Filter only choosed methods (if passed)
  .then(methods => {
    return args._.length ? methods.filter(m => args._.includes(m)) : methods
  })
  // Stop if no methods matched
  .then(methods => {
    return !methods.length ? Promise.reject(['NO_METHODS']) : methods
  })
  // Check size for every method
  .then(methods => {
    const getMaxLen = (max, cur) => (cur.length > max ? cur.length : max)
    longestName = methods.reduce(getMaxLen, 0)
    const getIndex = name => path.resolve('lib', name, 'index.js')
    const sizeLimit = name =>
      getSize(getIndex(name)).then(size => ({ name, size }))

    return Promise.all(methods.map(sizeLimit))
  })
  // Sort alphabetically
  .then(methods => {
    const byName = (a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1

    return methods.sort(byName)
  })
  // Create bordered row
  .then(methods => {
    return methods.map(i => ({
      ...i,
      border: createRow([formatName(i.name), formatSize(i.size)])
    }))
  })
  // Draw table
  .then(methods => {
    const topper = `╔${'═'.repeat(longestName + 2)}╦${'═'.repeat(8)}╗`
    const hrline = `╟${'─'.repeat(longestName + 2)}╫${'─'.repeat(8)}╢`
    const bottom = `╚${'═'.repeat(longestName + 2)}╩${'═'.repeat(8)}╝`
    const header = createRow([
      formatName('Method'),
      chalk.bold('Size'.padStart(6))
    ])
    const content = methods.map(i => i.border).join('\n')

    console.log([topper, header, hrline, content, bottom].join('\n'))
    return methods
  })
  // Draw list of failed methods
  .then(methods => {
    const failed = methods
      .filter(i => i.size > 1024)
      .map(i => `${formatName(i.name)}: ${i.size} B`)
    if (failed > 0) {
      console.log(`There are over-sized methods:\n${failed.join('\n')}`)
      process.exit(1)
    }
  })
  // Log errors
  .catch(err => {
    if (Array.isArray(err)) {
      switch (err[0]) {
        case 'NO_METHODS':
          console.log('No methods matched')
          break
        default:
          console.log('Unknown error happened')
      }
    }
  })
