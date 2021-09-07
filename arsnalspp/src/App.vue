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
  *, div, p, ul, li, section, body {list-style: none; margin: 0; padding: 0; box-sizing: border-box;}

  #app {width: 375px; background: #000; margin: 0 auto;}
  body {background: #fff;}
  .theme {color:red; font-size: 30px;}
  .player_name {font-size:40px;}
</style>
