const ghPages = require('gh-pages')

ghPages.publish('docs/.vuepress/dist', {
  branch: 'master',
  repo: 'https://github.com/nanoutils/nanoutils.github.io.git'
}, () => console.log('published'))
