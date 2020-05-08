// const path = require("path");
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

// eslint-disable-next-line no-unused-vars
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
const config = {
  // publicPath: './',
  lintOnSave: false,
  devServer: {
    // https: true,
    port: 7000,
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('ly-js', 'ly-js/dist/ly.eui.esm.js')
  // },
};

module.exports = config;
