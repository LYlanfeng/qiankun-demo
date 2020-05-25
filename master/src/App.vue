<template>
  <div id="test">
    <button @click="go('/user/home')">user/home</button>
    <button @click="go('/o')">7001</button>
    <button @click="go('/t/about')">7002</button>
    <button @click="go(data.rule)" v-for="data in routers" :key="data.rule">{{data.rule}}-${{data.port}}</button>
    <div>{{ pageLayout }}</div>
    <div>{{ loading }}</div>
    <component :is="routerViewLayOut"></component>
    <!--    <div id="subapp-viewport" class="app-view-box"></div>-->
    <!--    <div id="root-view" class="app-view-box" v-html="content"></div>-->
    <button @click="go('/o')">7001</button>
    <button @click="go('/t/home')">7002</button>
  </div>
</template>

<script>
import FullLayout from "./layout/FullLayout";
import MenuLayout from "./layout/MenuLayout";
const routers = [
  {
    name: "userCorporateCredit",
    entry: "http://192.168.1.52:8122/user/corporate-credit",
    rule: "/user/corporate-credit/home",
    port: 8122
  },
  // {
  //   name: "userBusinessTravel",
  //   entry: "http://192.168.1.52:8123/user/business-travel",
  //   rule: "/user/business-travel"
  // },
  {
    name: "userHome",
    entry: "http://192.168.1.52:8124/user/home",
    rule: "/user/home",
    port: 8124
  },
  // {
  //   name: "userBusinessModel",
  //   entry: "http://192.168.1.52:8125/user/business-model",
  //   rule: "/user/business-model"
  // },
  // {
  //   name: "userDocumentManagement",
  //   entry: "http://192.168.1.52:8126/user/document-management",
  //   rule: "/user/document-management"
  // },
  {
    name: "userTicketWallet",
    entry: "http://192.168.1.52:8127/user/ticket-wallet",
    rule: "/user/ticket-wallet",
    port: 8127
  },
  // {
  //   name: "userCompanyCircle",
  //   entry: "http://192.168.1.52:8128/user/company-circle",
  //   rule: "/user/company-circle"
  // },
  // {
  //   name: "userSetting",
  //   entry: "http://192.168.1.52:8129/user/setting",
  //   rule: "/user/setting"
  // },
  {
    name: "userPayroll",
    entry: "http://192.168.1.52:8130/user/payroll",
    rule: "/user/payroll",
    port: 8130
  },
  // {
  //   name: "userHr",
  //   entry: "http://192.168.1.52:8131/user/hr",
  //   rule: "/user/hr"
  // },
  // {
  //   name: "userChat",
  //   entry: "http://192.168.1.52:8132/user/chat",
  //   rule: "/user/chat"
  // },
  // {
  //   // 用户端智能核算
  //   name: "userIntelligentAccounting",
  //   entry: "http://192.168.1.52:8132/user/intelligent-accounting",
  //   rule: "/user/intelligent-accounting"
  // }
];
export default {
  name: "root-view",
  components: {
    FullLayout,
    MenuLayout
  },
  props: {
    loading: Boolean,
    showMicro: Boolean,
    config: Object
  },
  watch: {
    loading(val, oldVal) {
      console.log("loading change:", val, oldVal);
    }
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
      if (!this.config) {
        return 0;
      }
      if (this.config.dataInfo) {
        return this.config.dataInfo.pageLayout;
      }
    }
  },
  data() {
    return {
      routers
    };
  },
  methods: {
    go(url) {
      console.log("url:", url)
      window.history.pushState({}, "", url);
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
