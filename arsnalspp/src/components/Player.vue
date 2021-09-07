<template>
    <ul class="player">        
        <span v-if="$route.path == '/main'">
            <router-link to="/team">Team바로가기</router-link>
            <p>Best XI</p>
        </span>
        <ul class="list_player">
            <li v-show="player.best" v-for="player in this.$store.state.player" v-bind:key="player.backNumber">
                <span class="number" v-if="$route.path == '/team'">{{player.backNumber}}</span><span class="name">{{player.name}}</span><span class="position">{{player.position}}</span>
            </li>
        </ul>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.list_player {min-height: calc(667px - 60px); background: #003377; padding: 30px 25px 40px 15px;}
.list_player li {color:#fff; font-size:15px; margin: 0 0 20px;}
.list_player li:last-child {margin: 0;}
.list_player li .number {display: inline-block; width: 10%; text-align: center; color:rgba(255,255,255,.4); margin: 0 10px 0 0;}
.list_player li .name {color:#fff; font-weight: 400;}
.list_player li .position {float: right; color:#fff;}
.list_player li .position.gk {color:#deed80;}
.list_player li .position.fw {color:#ff0000;}
.list_player li .position.mf {color:#11ff1b;}
.list_player li .position.df {color:#8793fd;}
</style>