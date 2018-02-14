const fs = require('fs')
const path = require('path')
const util = require('util')

const readdir = util.promisify(fs.readdir)

const nanosDir = path.resolve('lib')
const ramdaDir = path.resolve('node_modules/ramda/es')

Promise.all([readdir(nanosDir), readdir(ramdaDir)])
  .then(([nanos, ramda]) => [
    nanos.filter(i => i !== 'index.js' && i !== '_internal'),
    ramda.filter(i => i !== 'internal').map(i => i.slice(0, -3))
  ])
  .then(([nanos, ramda]) => ({
    both: nanos.filter(method => ramda.includes(method)),
    nano: nanos.filter(method => !ramda.includes(method)),
    ramda: ramda.filter(method => !nanos.includes(method))
  }))
  .then(methods => {
    console.log(methods[process.argv[2]])
  })
