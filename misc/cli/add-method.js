const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
const names = args._

names.forEach(name => {
  const methodPath = path.resolve('lib', name)
  const methodTemplate = `module.exports = function ${name}() {

}`
  const tsTemplate = `export default function ${name}(): void`
  const flowTemplate = `// @flow
declare module.exports: () => void`
  const testTemplate = `var ${name} = require('.')

test("no tests yet", () => {})`

  try {
    fs.mkdirSync(`${methodPath}`)
  } catch (err) {
    if (!args.f) {
      console.log(
        chalk.bold.white.bgRed(' ERR '),
        chalk.red(`Method ${chalk.bold(name)} already exists`)
      )
      return
    } else {
      console.error(
        chalk.bold.black.bgYellow(' WARN '),
        chalk.yellow(`Override ${chalk.bold(name)} method`)
      )
    }
  }

  fs.writeFile(`${methodPath}/index.js`, methodTemplate, () => {})
  fs.writeFile(`${methodPath}/index.d.ts`, tsTemplate, () => {})
  fs.writeFile(`${methodPath}/index.js.flow`, flowTemplate, () => {})
  fs.writeFile(`${methodPath}/${name}.test.js`, testTemplate, () => {})
})
