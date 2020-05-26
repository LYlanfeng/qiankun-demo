// const path = require("path");
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

// eslint-disable-next-line no-unused-vars
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
const cdn = {
  css: [
    // element-ui css
    // "https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css",
    // "http://cdn.enfry.com/enfryComponents." + enfryComponentsVersion + ".css",
    // ...externalLink.css
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
  ],
  js: [
    // vue
    "https://cdn.bootcss.com/vue/2.6.10/vue.min.js",
    // vuex
    "https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js",
    // vue-router
    "https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js",
    "https://unpkg.com/element-ui/lib/index.js",
  ]
};
const config = {
  // publicPath: './',
  lintOnSave: false,
  devServer: {
    // https: true,
    port: 7000
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('ly-js', 'ly-js/dist/ly.eui.esm.js')
  // },
};
if (process.env.NODE_ENV === "development1") {
  config.chainWebpack = config => {
    config.plugin("html").tap(args => {
      args[0].cdn = {
        css: [],
        js: []
      };
      return args;
    });
    // config.resolve.alias
    //   .set('ly-js', 'ly-js/dist/ly.eui.esm.js')
  };
} else {
  config.chainWebpack = config => {
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex"
    });
    config.plugin("html").tap(args => {
      args[0].cdn = cdn;
      return args;
    });
    // config.resolve.alias
    //   .set('ly-js', 'ly-js/dist/ly.eui.esm.js')
  };
}

module.exports = config;
