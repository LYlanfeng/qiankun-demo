const { name } = require('./package');
const path = require("path");
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

// eslint-disable-next-line no-unused-vars
function resolve(dir) {
  return path.join(__dirname, dir)
}
const config = {
  // publicPath: './',
  lintOnSave: false,
  devServer: {
    // https: true,
    port: 7001,
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/proxy": {
        target: "http://apitest2.zhiduxz.com/api",
        changeOrigin: true,
        pathRewrite: {
          "^/proxy": ""
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('ly-js', 'ly-js/dist/ly.eui.esm.js')
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};

module.exports = config;
