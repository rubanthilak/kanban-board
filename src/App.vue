<template>
  <the-header>
        <navigation-bar></navigation-bar>
  </the-header>
  <main-board></main-board>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#app {
  font-family: "Circular Std Book", serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0px;
  padding: 0px;
}
</style>
