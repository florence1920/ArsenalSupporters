<template>
    <div class="theme">
        <div>
            <router-link to="/matches">Matches바로가기</router-link>
        </div>
        <div class="outer">
            <div class="inner_box">
                <p>Premier League</p>
                <div class="preview">
                    <img src="../assets/arsenal_logo.png" alt="" width="100px">
                    <img src="../assets/norwich_logo.png" alt="" width="100px">
                </div>
                <p class="stadium">Emirates Stadium</p>
                <p class="date">2021. 09. 10</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .theme {width: 100%; color: #fff; font-size: 20px;}
    .theme .outer {width: 100%; background: #aaa;}
    .theme .outer .inner_box {overflow: hidden; width: 280px; background: #111; margin: 0 auto;}
    .theme .outer .inner_box .preview {float: left; margin: 0 20px 0 20px;}
    
</style>