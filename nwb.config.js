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
  },
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/
      }
    },
    extra: {
      resolve: {
        extensions: ['.js', 'index.js', '.jsx'],
      }
    }
  },
}
