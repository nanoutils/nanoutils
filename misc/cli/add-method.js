const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const names = process.argv.slice(2)

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
    console.error(
      chalk.bold.white.bgRed(' WARN '),
      chalk.red(`Overwrite ${chalk.bold(name)} method`)
    )
  }

  fs.writeFile(`${methodPath}/index.js`, methodTemplate, () => {})
  fs.writeFile(`${methodPath}/index.d.ts`, tsTemplate, () => {})
  fs.writeFile(`${methodPath}/index.js.flow`, flowTemplate, () => {})
  fs.writeFile(`${methodPath}/${name}.test.js`, testTemplate, () => {})
})
