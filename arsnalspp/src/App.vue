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
  #app {width: 375px; height: auto; margin: 0 auto;}
  body {background: #fff;}
  .theme {color:red; font-size: 30px;}
  .player_name {font-size:40px;}
</style>
