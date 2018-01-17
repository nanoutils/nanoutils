const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
const names = args._

const methodPath = name => path.resolve('lib', name)

const methodTemplate = name => `export default function ${name}() {

}`

const curriedMethodTemplate = name => `import curry from '../curry'

export default curry(function ${name}() {

})`

const tsTemplate = name => `export default function ${name}(): void`

const flowTemplate = name => `// @flow
declare module.exports: () => void`

const testTemplate = name => `var ${name} = require('.')

test("no tests yet", () => {})`

const noTestsTemplate = name => `var ${name} = require('.')`

names.forEach(name => {
  try {
    fs.mkdirSync(`${methodPath(name)}`)
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

  fs.writeFile(
    `${methodPath(name)}/index.js`,
    args.curried ? curriedMethodTemplate(name) : methodTemplate(name),
    () => {}
  )

  if (!('types' in args) || args.types) {
    fs.writeFile(`${methodPath(name)}/index.d.ts`, tsTemplate(name), () => {})
    fs.writeFile(
      `${methodPath(name)}/index.js.flow`,
      flowTemplate(name),
      () => {}
    )
  }

  fs.writeFile(
    `${methodPath(name)}/${name}.test.js`,
    !('tests' in args) || args.tests
      ? testTemplate(name)
      : noTestsTemplate(name),
    () => {}
  )
})
