<template>
  <div :class="$style.app">
      路由列表：
      <router-link to='/'>首页</router-link> |
      <router-link to='/test'>test页面</router-link> |
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="stylus" module>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
