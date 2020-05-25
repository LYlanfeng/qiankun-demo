// import Vue from "vue";
// import App from "./App.vue";
// // import router from "./router";
// import store from "./store";
// localStorage.setItem("master", "1");
// localStorage.setItem("master-7001", "1");
//
// import {
//   registerMicroApps, // 注册子应用
//   runAfterFirstMounted, // 第一个子应用装载完毕
//   setDefaultMountApp, // 设置默认装载子应用
//   start // 启动
// } from "qiankun";
// // import { startMaster as enStart, setDefaultMountApp } from "en-micro";
// // console.log(enStart);
//
// Vue.config.productionTip = false;
//
// let instance = null;
// export function vueRender() {
//   instance = new Vue({
//     el: "#container",
//     // router,
//     store,
//     data: {
//       showMicro: false,
//       config: {}
//     },
//     // template: '<App :show-micro="showMicro" :config="config"/>',
//     // components: { App }
//     // render: h=> h(App)
//     render(h) {
//       return h(App, {
//         props: {
//           showMicro: this.showMicro,
//           config: this.config
//         }
//       });
//     }
//   });
// }
//
// vueRender()
//
// function render(content) {
//   console.log("render");
//   console.log(content);
// }
// // function genActiveRule(routerPrefix) {
// //   return location => location.pathname.startsWith(routerPrefix);
// // }
//
// // render();
// // const routers = [
// //   // {
// //   //   name: "userhome",
// //   //   entry: "//localhost:7001",
// //   //   container: "#subapp-viewport",
// //   //   activeRule: "/user/home",
// //   //   // render: render,
// //   //   props: {
// //   //     master: instance
// //   //   }
// //   // },
// //   {
// //     name: "subapp-o",
// //     entry: "//localhost:7001",
// //     container: "#subapp-viewport",
// //     activeRule: "/o",
// //     // render: render,
// //     props: {
// //       master: instance
// //     }
// //   },
// //   {
// //     name: "subapp-t",
// //     entry: "//localhost:7002",
// //     container: "#subapp-viewport",
// //     activeRule: "/t"
// //   }
// // ];
// const routers = [
//   {
//     name: "userHome",
//     entry: "http://192.168.1.52:8124/user/home",
//     container: "#subapp-viewport",
//     activeRule: "/user/home"
//   },
//   {
//     name: "subapp-o",
//     entry: "//localhost:7001",
//     container: "#subapp-viewport",
//     activeRule: "/o",
//     // render: render,
//     props: {
//       master: instance
//     }
//   },
//   {
//     name: "subapp-t",
//     entry: "//localhost:7002",
//     container: "#subapp-viewport",
//     activeRule: "/t"
//   },
//   // {
//   //   "name": "userCorporateCredit",
//   //   "entry": "http://192.168.1.52:8122/user/corporate-credit",
//   //   "rule": "/user/corporate-credit"
//   // },
//   // {
//   //   "name": "userBusinessTravel",
//   //   "entry": "http://192.168.1.52:8123/user/business-travel",
//   //   "rule": "/user/business-travel"
//   // },
//   // {
//   //   "name": "userBusinessModel",
//   //   "entry": "http://192.168.1.52:8125/user/business-model",
//   //   "rule": "/user/business-model"
//   // },
//   // {
//   //   "name": "userDocumentManagement",
//   //   "entry": "http://192.168.1.52:8126/user/document-management",
//   //   "rule": "/user/document-management"
//   // },
//   {
//     name: "userTicketWallet",
//     entry: "http://192.168.1.52:8127/user/ticket-wallet",
//     container: "#subapp-viewport",
//     activeRule: "/user/ticket-wallet"
//   },
//   // {
//   //   "name": "userCompanyCircle",
//   //   "entry": "http://192.168.1.52:8128/user/company-circle",
//   //   "rule": "/user/company-circle"
//   // },
//   // {
//   //   "name": "userSetting",
//   //   "entry": "http://192.168.1.52:8129/user/setting",
//   //   "rule": "/user/setting"
//   // },
//   {
//     "name": "userPayroll",
//     "entry": "http://192.168.1.52:8130/user/payroll",
//     "rule": "/user/payroll"
//   },
//   // {
//   //   "name": "userHr",
//   //   "entry": "http://192.168.1.52:8131/user/hr",
//   //   "rule": "/user/hr"
//   // },
//   // {
//   //   "name": "userChat",
//   //   "entry": "http://192.168.1.52:8132/user/chat",
//   //   "rule": "/user/chat"
//   // },
//   // { // 用户端智能核算
//   //   "name": "userIntelligentAccounting",
//   //   "entry": "http://192.168.1.52:8132/user/intelligent-accounting",
//   //   "rule": "/user/intelligent-accounting"
//   // }
// ];
// const lifeCycles = {
// };
// registerMicroApps(
//   routers,
//   // lifeCycles
//   {
//     beforeLoad: [
//       app => {
//         console.log("before load", app);
//       }
//     ],
//     beforeMount: [
//       app => {
//         console.log("before mount", app);
//       }
//     ],
//     afterUnmount: [
//       app => {
//         console.log("after-unmount", app);
//       }
//     ]
//   }
// );
//
// // 设置默认子应用,参数与注册子应用时genActiveRule("/o")函数内的参数一致
// setDefaultMountApp("o");
// // 启动微服务
// start();
//
// // 第一个子应用加载完毕回调
// runAfterFirstMounted(() => {
//   console.log("first app mounted");
// });

// enStart(
//   Vue,
//   {
//     el: "#container",
//     // router,
//     store
//   },
//   App,
//   routers,
//   lifeCycles
// );
import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
localStorage.setItem("master", "1");
localStorage.setItem("master-7001", "1");

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
    data: {
      showMicro: false,
      config: {}
    },
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

vueRender();

// function genActiveRule(routerPrefix) {
//   return location => location.pathname.startsWith(routerPrefix);
// }

// render();
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
    },
    {
      name: "userHome",
      entry: "http://localhost:8124",
      container: "#subapp-viewport",
      activeRule: "/user/home"
    },
    {
      name: "userTicketWallet",
      entry: "http://localhost:8127",
      container: "#subapp-viewport",
      activeRule: "/user/ticket-wallet"
    }
  ],
  lifeCycles
);

// 设置默认子应用,参数与注册子应用时genActiveRule("/o")函数内的参数一致
// setDefaultMountApp("o");

// 启动微服务
start();

// 第一个子应用加载完毕回调
// runAfterFirstMounted(() => {
//   console.log("first app mounted");
// });
