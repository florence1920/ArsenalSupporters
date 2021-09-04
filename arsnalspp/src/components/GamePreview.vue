<template>
    <div class="theme">
        <div>
            <router-link to="/matches">Matches바로가기</router-link>
        </div>
        <p>{{ matchPreview.leagueName }}</p>
        <p>{{ matchPreview.homeTeam }}</p>
        <p>NorwichLogo</p>
        <p>Arsenal vs Norwich</p> 
        <p>Emirates Stadium</p>
        <p>2021.09.02</p>
    </div>
</template>

<script>
export default {
    computed :{
        matchPreview(){
            return this.$store.state.matchPreview
        }
    }
}
</script>

<style scoped>
    .theme p {font-size: 20px; color: #000;}
</style>