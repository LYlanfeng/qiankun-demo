import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueRouter);
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
export async function mount() {
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? "/t" : "/",
  //   mode: "history",
  //   routes
  // });
  // instance = new Vue({
  //   router,
  //   store,
  //   render: h => h(App)
  // }).$mount("#app");
  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? "/t" : "/",
    routes
  });

  if (window.__POWERED_BY_QIANKUN__ && window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__) {
    const cachedInstance = window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__;

    // 从最初的Vue实例上获得_vnode
    const cachedNode =
        // (cachedInstance.cachedInstance && cachedInstance.cachedInstance._vnode) ||
        cachedInstance._vnode;

    // 让当前路由在最初的Vue实例上可用
    console.log('cachedI', cachedInstance)
    console.log('apps', cachedInstance.$router.apps)
    if (!cachedInstance.$router.app) {
      cachedInstance.$router.app = cachedInstance
      cachedInstance.$router.apps = [cachedInstance]
    }
    // router.app = cachedInstance;
    // router.apps = cachedInstance.$router.apps;
    router.apps.push(...cachedInstance.$router.apps);
    // router.apps.push(cachedInstance);

    instance = new Vue({
      router,
      store,
      render: () => cachedNode
    });
    console.log('instance:', instance)
    console.log('instance:', router)

    // 缓存最初的Vue实例
    instance.cachedInstance = cachedInstance;

    router.onReady(() => {
      const { path } = router.currentRoute;
      const { path: oldPath } = cachedInstance.$router.currentRoute;
      console.log('path:', path)
      console.log('oldPath:', oldPath)
      // 当前路由和上一次卸载时不一致，则切换至新路由
      if (path !== oldPath) {
        cachedInstance.$router.push(path);
      }
      console.log('cachedInstance:', cachedInstance)
      console.log('instance:', instance)
      console.log('instance:', router)
    });
    instance.$mount('#app');
  } else {
    // 正常实例化
    instance = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
    console.log('instance:', instance)
    console.log('instance:', router)
  }
}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  // instance.$destroy();
  // instance = null;
  // router = null;
  const cachedInstance = instance.cachedInstance || instance;
  window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__ = cachedInstance;
  const cachedNode = cachedInstance._vnode;
  // 让keep-alive可用
  cachedNode.data.keepAlive = true;
  // 卸载当前实例，缓存的实例由于keep-alive生效，将不会真正被销毁，从而触发activated与deactivated
  instance.$destroy();
  router = null;
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();
