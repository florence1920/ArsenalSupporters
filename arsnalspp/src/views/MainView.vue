<template>
    <div>
        <h1>
            MainPage
        </h1>
        <div class="mainFrame">
            <game-preview></game-preview>
            <record></record>
            <player></player>
        </div>

        <!--1. main, team frame component-->
        <!--2. preview-->
        <!--3. Goal, assist-->
        <!--4. Player-->
    </div>
</template>

<script>
import GamePreview from '../components/GamePreview.vue'
import Player from '../components/Player.vue'
import Record from '../components/Record.vue'
export default {
    components :{
        GamePreview,
        Record,
        Player
    }
}
</script>

<style scoped>
    .mainFrame {background: blueviolet;}
</style>