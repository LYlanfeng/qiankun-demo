<template>
  <div id="test">
    <button @click="go('/o')">7001</button>
    <button @click="go('/t/about')">7002</button>
    <div>{{pageLayout}}</div>
    <component
      :is="routerViewLayOut"
    ></component>
<!--    <div id="subapp-viewport" class="app-view-box"></div>-->
<!--    <div id="root-view" class="app-view-box" v-html="content"></div>-->
    <button @click="go('/o')">7001</button>
    <button @click="go('/t/home')">7002</button>
  </div>
</template>

<script>
  import FullLayout from "./layout/FullLayout";
  import MenuLayout from "./layout/MenuLayout";
export default {
  name: "root-view",
  components: {
    FullLayout,
    MenuLayout,
  },
  props: {
    loading: Boolean,
    showMicro: Boolean,
    config: Object,
  },
  computed: {
    // 根据规则判断返回渲染模板,比如有 微服务的渲染模板,带菜单的渲染模板,不带菜单全屏的渲染模板
    routerViewLayOut() {
      if (this.showMicro) {
        return "FullLayout";
      }
      return "MenuLayout";
    },
    pageLayout() {
     if (!this.config)  {
       return 0
     }
     if (this.config.dataInfo) {
       return this.config.dataInfo.pageLayout
     }
    }
  },
  methods: {
    go(url) {
      window.history.pushState({} ,'' ,url);
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
