module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSelectableList',
      externals: {
        react: 'React'
      }
    }
  }
}
