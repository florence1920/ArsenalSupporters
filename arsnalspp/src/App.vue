<template>
  <div id="app">
    <head-sub></head-sub>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadSub from './components/HeadSub.vue';
export default {
  name: 'App',
  components: {
    HeadSub
  }
}
</script>

<style>
/* reset */
*, div, p, ul, li, section, body {text-decoration: none; list-style: none; margin: 0; padding: 0; box-sizing: border-box;}

body {background: #eee;}
#app {overflow: hidden; width: 375px; min-height:667px; background: #fff; border-radius: 20px; margin: 50px auto 0;}
.theme {color:red; font-size: 30px;}
</style>
