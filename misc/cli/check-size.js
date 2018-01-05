const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const getSize = require('size-limit')

const getPath = name => path.resolve('lib', name, 'index.js')

const getSizeAndSave = name =>
  getSize(getPath(name)).then(size => ({ name, size }))

const alphabetically = (a, b) => {
  const [aLower, bLower] = [a, b].map(i => i.name.toLowerCase())
  return aLower > bLower ? 1 : aLower == bLower ? 0 : -1
}

const separator = len => `╟${'─'.repeat(len)}╢\n`

const wrapper = (len, data) =>
  console.log(`╔${'═'.repeat(len)}╗\n${legend()}\n${data}╚${'═'.repeat(len)}╝`)

const legend = () =>
  `║ ${chalk.bold('Method'.padEnd(15))}║${chalk.bold('Size'.padStart(7))} ║`

const content = m => `║ ${m.name.padEnd(15)}║${`${m.size}`.padStart(5)} B ║\n`

const log = data => wrapper(25, data.map(content).join(''))

const args = process.argv.slice(2)

const libDir = path.resolve('lib')
const methods = args.length ? args : fs.readdirSync(libDir)

Promise.all(methods.map(getSizeAndSave)).then(sizes => {
  log(sizes.sort(alphabetically))
})
