const path = require("path");
const webpack = require("webpack");

const base = require("./webpack.config");

const srcPath = path.join(__dirname, "../src");
const demoPath = path.join(__dirname, "../demo");

base.module.rules[0].include = [srcPath, demoPath];

module.exports = {
  context: base.context,
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080",
      "../demo/index.jsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, "../demo"),
    filename: "bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  },
  resolve: base.resolve,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  module: base.module,
  devtool: "eval-source-map",
  externals: base.externals,
  devServer: {
    contentBase: path.join(__dirname, "../demo"),
    publicPath: "/",
    historyApiFallback: true
  }
};
