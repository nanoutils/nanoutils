const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2), { alias: { f: 'force' } })

const names = args._

const methodPath = name => path.resolve('lib', name)

const methodTemplate = name => `export default function ${name}() {

}
`

const curriedMethodTemplate = name => `import curry from '../curry'

export default curry(function ${name}() {

})
`

const curriedNumMethodTemplate = (name, num) => {
  const curried = {
    2: `import curry2 from '../_internal/_curry2'

export default curry2(function ${name}() {

})
`,
    3: `import curry3 from '../_internal/_curry3'

export default curry3(function ${name}() {

})
`,
    n: `import curryN from '../curryN/curryN'

export default curryN(${num}, function ${name}() {

})
`
  }

  return curried[num] || curried.n
}

const tsTemplate = name => `export default function ${name}(): void
`

const flowTemplate = name => `// @flow
declare module.exports: () => void
`

const performanceTemplate = name => `module.exports = function getData() {
  return {
    type: 'no_perf',
    argss: [[], [], []]
  }
}
`

const testTemplate = name => `import ${name} from '.'

test('no tests yet', () => {})
`

names.forEach(name => {
  try {
    fs.mkdirSync(`${methodPath(name)}`)
  } catch (err) {
    if (!args.force) {
      console.log(
        chalk.bold.white.bgRed(' ERR '),
        chalk.red(`Method ${chalk.bold(name)} already exists`)
      )
      process.exit(1)
    } else {
      console.error(
        chalk.bold.black.bgYellow(' WARN '),
        chalk.yellow(`Override ${chalk.bold(name)} method`)
      )
    }
  }

  fs.writeFile(
    `${methodPath(name)}/index.js`,
    args.curried
      ? typeof args.curried === 'number'
        ? curriedNumMethodTemplate(name, args.curried)
        : curriedMethodTemplate(name)
      : methodTemplate(name),
    () => {}
  )

  if ('types' in args && args.types) {
    fs.writeFile(`${methodPath(name)}/index.d.ts`, tsTemplate(name), () => {})
    fs.writeFile(
      `${methodPath(name)}/index.js.flow`,
      flowTemplate(name),
      () => {}
    )
  }

  if ('perf' in args && args.perf) {
    fs.writeFile(
      `${methodPath(name)}/${name}.performance.js`,
      performanceTemplate(name),
      () => {}
    )
  }

  fs.writeFile(
    `${methodPath(name)}/${name}.test.js`,
    testTemplate(name),
    () => {}
  )
})
