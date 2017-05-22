/* globals __dirname */
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const merge = require("lodash/merge");

const srcPath = path.join(__dirname, "../src");

module.exports = {
  context: srcPath,
  entry: "../src/index.jsx",
  output: {
    libraryTarget: "commonjs2",
    library: "UploadDownloadMonitor",
    path: path.resolve(__dirname, "../dist")
  },
  target: "node",
  resolve: {
    modules: [srcPath, "node_modules"],
    alias: {},
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js(x|)?$/,
        use: {
          loader: "babel-loader"
        },
        include: srcPath,
        exclude: /node_modules/
      }
    ]
  }
};
