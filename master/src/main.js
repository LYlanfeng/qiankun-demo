import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
localStorage.setItem("master", "1");
localStorage.setItem("master-7001", "1");

// import {
//   registerMicroApps, // 注册子应用
//   runAfterFirstMounted, // 第一个子应用装载完毕
//   setDefaultMountApp, // 设置默认装载子应用
//   start // 启动
// } from "qiankun";
import { startMaster as enStart, setDefaultMountApp } from "en-micro";
console.log(enStart);

Vue.config.productionTip = false;

let instance = null;
export function vueRender() {
  instance = new Vue({
    el: "#container",
    // router,
    store,
    data: {
      showMicro: false,
      config: {}
    },
    // template: '<App :show-micro="showMicro" :config="config"/>',
    // components: { App }
    // render: h=> h(App)
    render(h) {
      return h(App, {
        props: {
          showMicro: this.showMicro,
          config: this.config
        }
      });
    }
  });
}

// vueRender()

function render(content) {
  console.log("render");
  console.log(content);
}
// function genActiveRule(routerPrefix) {
//   return location => location.pathname.startsWith(routerPrefix);
// }

// render();
const routers = [
  {
    name: "subapp-o",
    entry: "//localhost:7001",
    container: "#subapp-viewport",
    activeRule: "/o",
    // render: render,
    props: {
      master: instance
    }
  },
  {
    name: "subapp-t",
    entry: "//localhost:7002",
    container: "#subapp-viewport",
    activeRule: "/t"
  }
];
const lifeCycles = {
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
};
// registerMicroApps(
//   routers,
//   lifeCycles
//   // {
//   //   beforeLoad: [
//   //     app => {
//   //       console.log("before load", app);
//   //     }
//   //   ],
//   //   beforeMount: [
//   //     app => {
//   //       console.log("before mount", app);
//   //     }
//   //   ],
//   //   afterUnmount: [
//   //     app => {
//   //       console.log("after-unmount", app);
//   //     }
//   //   ]
//   // }
// );

// 设置默认子应用,参数与注册子应用时genActiveRule("/o")函数内的参数一致
// setDefaultMountApp("o");
// 启动微服务
// start();

// 第一个子应用加载完毕回调
// runAfterFirstMounted(() => {
//   console.log("first app mounted");
// });

enStart(
  Vue,
  {
    el: "#container",
    // router,
    store
  },
  App,
  routers,
  lifeCycles
);
