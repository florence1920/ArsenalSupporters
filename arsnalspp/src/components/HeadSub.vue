<template>
    <div>
        <div class="top" v-if="$route.path == '/main'">
            <p class="tit">Arsenal Supporters</p>
        </div>
        <div class="top" v-if="$route.path == '/team'">
            <router-link to='/main'><p class="back"></p></router-link>            
            <p class="tit">20-21 Squad</p>
        </div>
        <div class="top" v-if="$route.path == '/matches'">
            <router-link to='/main'><p class="back"></p></router-link>            
            <p class="tit">20-21 Squad</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.top {overflow: hidden; height: 60px; padding: 0 20px;}
.top .back {float: left; width: 30px; height: 60px; background: url(../assets/back.png)no-repeat center left; background-size: auto 18px;}
.top .tit {float: left; line-height: 61px; color:#003377; font-size:20px; font-weight: 600; margin: 0 0 0 10px;}
</style>