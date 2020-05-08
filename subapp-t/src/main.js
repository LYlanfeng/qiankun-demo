import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance = null;
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
export async function bootstrap() {
  console.log('vue app bootstraped');
}
export async function mount(props) {
  console.log(props)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/t" : "/",
    mode: "history",
    routes
  });
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();
