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
  #app{
    background: #92923f;
    width: 500px;
    margin: 0 auto;
  }
</style>
