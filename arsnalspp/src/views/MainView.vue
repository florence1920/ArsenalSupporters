<template>
    <div>
        <ul class="mainFrame">
            <li>
                <game-preview></game-preview>
            </li>
            <li>
                <record></record>
            </li>
            <li>
                <player></player>
            </li>
        </ul>

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
    .mainFrame {background: blue;}
</style>