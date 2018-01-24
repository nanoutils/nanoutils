const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
const oldest = args._[0]
const newest = args._[1]

const files = fs.readdirSync(path.resolve('lib'))

if (!files.includes(oldest)) {
  console.log(
    chalk.bold.white.bgRed(' ERR '),
    chalk.red(`Method ${chalk.bold(oldest)} not found`)
  )
  process.exit(1)
}

fs.renameSync(path.resolve('lib', oldest), path.resolve('lib', newest))
fs.renameSync(
  path.resolve('lib', oldest, `${oldest}.test.js`),
  path.resolve('lib', newest, `${newest}.test.js`)
)
