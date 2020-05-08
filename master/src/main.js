import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
localStorage.setItem('master', '1')
localStorage.setItem('master-7001', '1')

import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 第一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载子应用
  start // 启动
} from "qiankun";

Vue.config.productionTip = false;


export function vueRender() {
  new Vue({
    el: "#container",
    // router,
    store,
    render: h=> h(App)
  });
}

vueRender()

// function genActiveRule(routerPrefix) {
//   return location => location.pathname.startsWith(routerPrefix);
// }

// render();

registerMicroApps(
  [
    {
      name: "subapp-o",
      entry: "//localhost:7001",
      container: "#subapp-viewport",
      activeRule: "/o"
    },
    {
      name: "subapp-t",
      entry: "//localhost:7002",
      container: "#subapp-viewport",
      activeRule: "/t"
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log("before load", app);
      }
    ],
    beforeMount: [
      app => {
        console.log("before mount", app);
      }
    ],
    afterUnmount: [
      app => {
        console.log("after-unmount", app);
      }
    ]
  }
);

// 设置默认子应用,参数与注册子应用时genActiveRule("/o")函数内的参数一致
setDefaultMountApp("o");

// 启动微服务
start()

// 第一个子应用加载完毕回调
runAfterFirstMounted(() => {
  console.log("first app mounted")
});

