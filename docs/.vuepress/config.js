module.exports = {
  base: '/',
  title: "Nanoutils",
  themeConfig: {
    repo: 'nanoutils/nanoutils',
    sidebar: [
      {
        collapsable: false,
        title: 'Nanoutils',
        children: ['/']
      },
      {
        title: 'Documentation',
        children: ['/docs/methods']
      },
      {
        title: 'Development helpers',
        children: ['/dev-helpers/cli']
      }
    ]
  }
}
