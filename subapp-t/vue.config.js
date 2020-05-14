const { name } = require('./package');
const path = require("path");
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

// eslint-disable-next-line no-unused-vars
function resolve(dir) {
  return path.join(__dirname, dir)
}
const cdn = {
  css: [
    // element-ui css
    // "https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css",
    // "http://cdn.enfry.com/enfryComponents." + enfryComponentsVersion + ".css",
    // ...externalLink.css
  ],
  js: [
    // vue
    "https://cdn.bootcss.com/vue/2.6.10/vue.min.js",
    // vuex
    "https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js",
    // vue-router
    "https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js",
  ]
};
const config = {
  // publicPath: './',
  lintOnSave: false,
  devServer: {
    // https: true,
    port: 7002,
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
  chainWebpack: (config) => {
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
    })
    config.plugin("html").tap(args => {
      args[0].cdn = cdn;
      return args;
    })
    // config.resolve.alias
    //   .set('ly-js', 'ly-js/dist/ly.eui.esm.js')
  },
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
