<template>
    <ul class="player">
        <router-link to="/team">Team바로가기</router-link>
        <span v-if="$route.path == '/main'">
            <p>Best XI</p>
        </span>
        <ul>
            <li v-show="player.best" v-for="player in this.$store.state.player" v-bind:key="player.backNumber">
                <span v-if="$route.path == '/team'">{{player.backNumber}}/</span> {{player.name}} / {{player.position}}
            </li>
        </ul>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
    .player {width:280px; height:200px; background:#fff;}
    .player p {color:#000;}
    .player li {color:#000;}
</style>