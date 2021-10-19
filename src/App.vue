<template>
  <div id="app">
    当前环境:{{env}}
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      env:process.env.NODE_ENV,
      active:0
    }
  }
}
</script>

<style>
#app {
 
}
</style>
