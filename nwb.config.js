module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ReactSelectableList",
      externals: {
        react: "React"
      }
    }
  },
  babel: {
    cherryPick: ["recompose"],
    plugins: [
      [
        "css-modules-transform",
        {
          preprocessCss: "./preprocess-css.js",
          generateScopedName: "[name]__[local]",
          extensions: [".scss"],
          extractCss: "./styles.css"
        }
      ]
    ]
  },
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/
      },
      "sass-css": {
        modules: true,
        localIdentName: "[name]__[local]"
      }
    },
    extra: {
      resolve: {
        extensions: [".js", "index.js", ".jsx"]
      }
    }
  }
};
