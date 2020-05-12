<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" v-model="value">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
        value: '',
    }
  },
  mounted() {
    console.log('Home app.vue mounted:', this.value)
  },
  activated() {
    console.log('Home app.vue activated', this.value)
    console.log(this.$router)
  },
  deactivated() {
    console.log('Home app.vue deactivated', this.value)
  }
}
</script>
