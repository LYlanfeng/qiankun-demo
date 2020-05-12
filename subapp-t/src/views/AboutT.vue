<template>
  <div class="about">
    <h1>This is an about2 page</h1>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    components: {
    },
    data() {
      return {
        value: '',
      }
    },
    mounted() {
      console.log('About app.vue mounted:', this.value)
    },
    activated() {
      console.log('About app.vue activated')
      console.log(this.$router)
    },
    deactivated() {
      console.log('About app.vue deactivated')
    }
  }
</script>
