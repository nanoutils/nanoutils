const { readdir, writeFile } = require('fs').promises
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const getSize = require('size-limit')
const sizeLimitPreset = require('@size-limit/preset-small-lib')
const minimist = require('minimist')

const nanoutilsCeil = require('../../cjs/ceil')
const nanoutilsMax = require('../../cjs/max')
const nanoutilsMin = require('../../cjs/min')
const nanoutilsSum = require('../../cjs/sum')
const nanoutilsMean = require('../../cjs/mean')
const median = require('../../cjs/median')

const mean = args => nanoutilsCeil(nanoutilsMean(args))
const maximum = args => nanoutilsCeil(args.reduce((maxValue, value) => nanoutilsMax(+value, +maxValue), Number.MIN_VALUE), 2)
const minimum = args => nanoutilsCeil(args.reduce((minValue, value) => nanoutilsMin(+value, +minValue), Number.MAX_VALUE), 2)
const total = args => nanoutilsSum(args)
const light = (args) => args.reduce(({ count, ramdaCount }, { size, ramdaSize }) => ({
  count: count + (size < ramdaSize ? 1 : 0),
  ramdaCount: ramdaCount + (ramdaSize < size ? 1 : 0)
}), { count: 0, ramdaCount: 0 })

const args = minimist(process.argv.slice(2))
const createRow = cols => '║ ' + cols.join(' ║ ') + ' ║'
const formatName = (longestName, name) => chalk.bold(name.padEnd(longestName))
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

const excludeIndexAndInernals = (method) => !['index.js', '_internal'].includes(method)

const filterChoosedMethods = (methods) => args._.length ? methods.filter(m => args._.includes(m)) : methods

const getMaxLen = (max, cur) => cur.length > max ? cur.length : max

const getIndex = name => path.resolve('lib', name, 'index.js')

const getRamda = name => path.resolve('node_modules/ramda/es', `${name}.js`)

const sizeLimit = async name => {
  const [{ size }] = await getSize(sizeLimitPreset, [getIndex(name)])
  const [{ size: ramdaSize }] = await getSize(sizeLimitPreset, [getRamda(name)]).catch(() => [{ size: 'n/a' }])

  return { name, size, ramdaSize }
}

const sortByName = (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1

const getSizes = (methodNames) => Promise.all(methodNames.map(sizeLimit))

const printTable = (methods, longestName) => {
  const lens = [longestName + 2, 10, 10, 11]
  const sline = lens.map(len => '─'.repeat(len))
  const dline = lens.map(len => '═'.repeat(len))
  const topper = `╔${dline.join('╦')}╗`
  const hrline = `╟${sline.join('╫')}╢`
  const bottom = `╚${dline.join('╩')}╝`
  const header = createRow([
    formatName(longestName, 'Method'),
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
    formatName(longestName, 'total'),
    formatSize(total.sizeNoRamda),
    formatSize(total.ramdaSize),
    formatDiff(total.sizeNoRamda, total.ramdaSize)
  ])

  const contents = [topper, header, hrline, content, hrline, totalRow, bottom].join('\n')

  console.log(contents)
}

const writeSizesFile = (methods) => {
  const header = '## Nanoutils methods size'
  const caption = `\n| Method | Nano | Ramda | Diff |`
  const hrline = `| --- | --- | --- | --- |`
  const str = methods.map(saveSizeToTable).join('\n')
  const footer =
    '## How it works?\nWe use [size-limit](https://github.com/ai/size-limit) to check methods size'
  const statistics = getStatisticsRows(methods).join('\n')
  const contents = [header, caption, hrline, str, hrline, statistics, footer].join('\n')

  return writeFile('SIZES.md', contents)
}

async function main() {
  const libPath = path.resolve('cjs');
  const methodNames = (await readdir(libPath))
    .filter(excludeIndexAndInernals)
    .filter(filterChoosedMethods);

  // Stop if no methods matched
  if (!methodNames.length) {
    throw new Error('NO_METHODS')
  }

  const longestName = methodNames.reduce(getMaxLen, 6)

  const methodsWithSizes = (await getSizes(methodNames))
    .sort(sortByName)
    .map(method => ({
      ...method,
      border: createRow([
        formatName(longestName, method.name),
        formatSize(method.size),
        formatSize(method.ramdaSize),
        formatDiff(method.size, method.ramdaSize)
      ])
    }))
  
  printTable(methodsWithSizes, longestName)

  if (!args._.length) {
    await writeSizesFile(methodsWithSizes)
  }

  const failed = methodsWithSizes
    .filter(method => method.size > 1024)
    .map(method => `${formatName(longestName, method.name)}: ${method.size} B`)
    
  if (failed > 0) {
    console.error(`There are over-sized methods:\n${failed.join('\n')}`)
  }
}
  
main().then(() => process.exit(0), err => {
  switch (err.message) {
    case 'NO_METHODS':
      console.error('No methods matched')
      break
    default:
      console.error('Unknown error happened')
      console.error(err)
  }

  process.exit(1)
})
