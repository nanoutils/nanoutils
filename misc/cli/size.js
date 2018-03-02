const fs = require('fs')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const getSize = require('size-limit')
const minimist = require('minimist')

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
  if (ramdaSize === 'n/a') return 'n/a'.padStart(8)
  const ok = ramdaSize >= size
  return chalk[ok ? 'green' : 'red'](
    `${ok ? '' : '+'}${size - ramdaSize}`.padStart(6) + ' B'
  )
}

Promise
  // Get lib path
  .resolve(path.resolve('lib'))
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
    const lens = [longestName + 2, 10, 10, 10]
    const sline = lens.map(len => '─'.repeat(len))
    const dline = lens.map(len => '═'.repeat(len))
    const topper = `╔${dline.join('╦')}╗`
    const hrline = `╟${sline.join('╫')}╢`
    const bottom = `╚${dline.join('╩')}╝`
    const header = createRow([
      formatName('Method'),
      chalk.bold('Nano'.padStart(8)),
      chalk.bold('Ramda'.padStart(8)),
      chalk.bold('Diff'.padStart(8))
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
      const caption = `\n| Method | Nano | Ramda | Diff | \n| --- | --- | --- | --- |`
      const str = methods
        .map(
          i =>
            `| ${i.name} | ${i.size} B | ${i.ramdaSize} B | ${getDiff(
              i.size,
              i.ramdaSize
            )} B |`
        )
        .join('\n')
      const footer =
        '## How it works?\nWe use [size-limit](https://github.com/ai/size-limit) to check methods size'
      return writeFile(
        'SIZES.md',
        [header, caption, str, footer].join('\n')
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
