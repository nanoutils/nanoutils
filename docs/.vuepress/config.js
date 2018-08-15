module.exports = {
  base: '/',
  title: "Nanoutils",
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        title: 'Nanoutils',
        children: ['/', '/start/installation']
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
