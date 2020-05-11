<template>
  <div id="test">
    <button @click="go('/o')">7001</button>
    <button @click="go('/t')">7002</button>
    <div id="subapp-viewport" class="app-view-box"></div>
<!--    <div id="root-view" class="app-view-box" v-html="content"></div>-->
    <button @click="go('/o')">7001</button>
    <button @click="go('/t')">7002</button>
  </div>
</template>

<script>
export default {
  name: "root-view",
  props: {
    loading: Boolean,
    content: String
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
