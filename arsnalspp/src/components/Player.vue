<template>
    <ul class="player">
        <router-link to="/team">Team바로가기</router-link>
        <span v-if="$route.path == '/main'">
            <p>Best XI</p>
        </span>
        <ul>
            <li v-show="player.best" v-for="player in this.$store.state.player" v-bind:key="player.backNumber">
                <span v-if="$route.path == '/team'">{{player.backNumber}}/</span> {{player.name}} / {{player.position}} / {{player.goal}}
            </li>
        </ul>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>