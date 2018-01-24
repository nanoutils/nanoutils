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

const wrapper = (len, data) =>
  console.log(`╔${'═'.repeat(len)}╗\n${legend()}\n${data}╚${'═'.repeat(len)}╝`)

const separator = len => `╟${'─'.repeat(len)}╢\n`

const legend = () =>
  `║ ${chalk.bold('Method')}║${chalk.bold('Size')} ║`

const content = m =>
  `║ ${m.name}║${chalk[m.size > 1024 ? 'red' : 'green'](
    `${m.size}`
  )} B ║\n`

const log = data => wrapper(25, data.map(content).join(''))

const args = process.argv.slice(2)

const libDir = path.resolve('lib')
const methods = args.length
  ? args
  : fs.readdirSync(libDir).filter(i => i !== 'index.js')

Promise.all(methods.map(getSizeAndSave)).then(sizes => {
  log(sizes.sort(alphabetically))
})
