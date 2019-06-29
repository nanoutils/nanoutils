const fs = require('fs')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const getSize = require('size-limit')
const minimist = require('minimist')

const nanoutilsCeil = require('../../cjs/ceil')
const nanoutilsMax = require('../../cjs/max')
const nanoutilsMin = require('../../cjs/min')
const nanoutilsSum = require('../../cjs/sum')
const mean = args => nanoutilsCeil(require('../../cjs/mean')(args))
const median = require('../../cjs/median')
const maximum = args => nanoutilsCeil(args.reduce((maxValue, value) => nanoutilsMax(+value, +maxValue), Number.MIN_VALUE), 2)
const minimum = args => nanoutilsCeil(args.reduce((minValue, value) => nanoutilsMin(+value, +minValue), Number.MAX_VALUE), 2)
const total = args => nanoutilsSum(args)
const light = (args) => args.reduce(({ count, ramdaCount }, { size, ramdaSize }) => ({
  count: count + (size < ramdaSize ? 1 : 0),
  ramdaCount: ramdaCount + (ramdaSize < size ? 1 : 0)
}), { count: 0, ramdaCount: 0 })

let longestName
const args = minimist(process.argv.slice(2))
const readdir = util.promisify(fs.readdir)
const writeFile = util.promisify(fs.writeFile)
const createRow = cols => '║ ' + cols.join(' ║ ') + ' ║'
const formatName = name => chalk.bold(name.padEnd(longestName))
const formatSize = size => `${size}`.padStart(6) + ' B'
const getDiff = (size, ramdaSize) =>
  ramdaSize === 'n/a'
    ? 'n/a'
    : `${ramdaSize >= size ? '' : '+'}${size - ramdaSize}`
const formatDiff = (size, ramdaSize) => {
  if (ramdaSize === 'n/a') return 'n/a'.padStart(9)
  const ok = ramdaSize >= size
  return chalk[ok ? 'green' : 'red'](
    `${ok ? '' : '+'}${size - ramdaSize}`.padStart(7) + ' B'
  )
}
const saveSizeToTable = ({ name, size, ramdaSize }) => `| ${name} | ${size} B | ${ramdaSize} B | ${getDiff(
  size,
  ramdaSize
)} B |`
const saveCountToTable = ({ name, count, ramdaCount }) => `| ${name} | ${count} | ${ramdaCount} | ${getDiff(
  count,
  ramdaCount
)} |`
const getStatisticsRows = methods => {
  const ramdaMethodsStatistics = methods.filter(({ ramdaSize }) => ramdaSize !== 'n/a')

  const sizes = [minimum, median, mean, maximum, total].map(f => saveSizeToTable({
    name: f.name,
    size: f(methods.map(({ size }) => size)),
    ramdaSize: f(ramdaMethodsStatistics.map(({ ramdaSize }) => ramdaSize)),
    sizeNoRamda: f(ramdaMethodsStatistics.map(({ size }) => size))
  }))

  const counts = [light].map(f => saveCountToTable({
    name: f.name,
    ...f(ramdaMethodsStatistics)
  }))

  return [...sizes, ...counts]
}

Promise
  // Get lib path
  .resolve(path.resolve('cjs'))
  // Get list of methods
  .then(readdir)
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
    longestName = methods.reduce(getMaxLen, 6)
    const getIndex = name => path.resolve('lib', name, 'index.js')
    const getRamda = name => path.resolve('node_modules/ramda/es', `${name}.js`)
    const sizeLimit = name =>
      getSize(getIndex(name))
        .then(size => ({ name, size }))
        .then(({ name, size }) =>
          getSize(getRamda(name))
            .then(ramdaSize => ({
              name,
              size,
              ramdaSize
            }))
            .catch(() => ({
              name,
              size,
              ramdaSize: 'n/a'
            }))
        )

    return Promise.all(methods.map(sizeLimit)).catch(console.log)
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
      border: createRow([
        formatName(i.name),
        formatSize(i.size),
        formatSize(i.ramdaSize),
        formatDiff(i.size, i.ramdaSize)
      ])
    }))
  })
  // Draw table
  .then(methods => {
    const lens = [longestName + 2, 10, 10, 11]
    const sline = lens.map(len => '─'.repeat(len))
    const dline = lens.map(len => '═'.repeat(len))
    const topper = `╔${dline.join('╦')}╗`
    const hrline = `╟${sline.join('╫')}╢`
    const bottom = `╚${dline.join('╩')}╝`
    const header = createRow([
      formatName('Method'),
      chalk.bold('Nano'.padStart(8)),
      chalk.bold('Ramda'.padStart(8)),
      chalk.bold('Diff'.padStart(9))
    ])
    const content = methods.map(i => i.border).join('\n')
    const total = methods.reduce(
      (res, cur) => ({
        size: res.size + cur.size,
        ramdaSize:
          cur.ramdaSize === 'n/a'
            ? res.ramdaSize
            : res.ramdaSize + cur.ramdaSize,
        sizeNoRamda: cur.ramdaSize === 'n/a' ? res.size : res.size + cur.size
      }),
      { size: 0, ramdaSize: 0 }
    )

    const totalRow = createRow([
      formatName('total'),
      formatSize(total.sizeNoRamda),
      formatSize(total.ramdaSize),
      formatDiff(total.sizeNoRamda, total.ramdaSize)
    ])

    console.log(
      [topper, header, hrline, content, hrline, totalRow, bottom].join('\n')
    )
    return methods
  })
  // Save it to SIZES.md
  .then(methods => {
    if (!args._.length) {
      const header = '## Nanoutils methods size'
      const caption = `\n| Method | Nano | Ramda | Diff |`
      const hrline = `| --- | --- | --- | --- |`
      const str = methods.map(saveSizeToTable).join('\n')
      const footer =
        '## How it works?\nWe use [size-limit](https://github.com/ai/size-limit) to check methods size'
      const statistics = getStatisticsRows(methods).join('\n')
      return writeFile(
        'SIZES.md',
        [header, caption, hrline, str, hrline, statistics, footer].join('\n')
      ).then(() => methods)
    }
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
