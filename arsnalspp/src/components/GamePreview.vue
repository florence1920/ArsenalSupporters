<template>
    <div class="outer">
        <div class="inner">
            <p>{{ matchPreview.leagueName }}
                <span>
                    <div>
                        <router-link to="/matches">+</router-link>
                    </div>
                </span>
            </p>
            <div class="preview">
                <img src="../assets/arsenal_logo.png" alt="" width="60px">
                <p>vs</p>
                <img src="../assets/norwich_logo.png" alt="" width="70px">
            </div>
            <p>{{ matchPreview.stadium}}</p>
            <p>{{ matchPreview.matchDate}}</p>
        </div>
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
    .outer {width: 100%; color: #fff; font-size: 20px; background: #073F8A; padding: 5px 5px;}
    .outer .inner {overflow: hidden; width: 90%; background: #003377; margin: 20px auto; text-align: center;}
    .outer .inner span {float: right;}
    .outer .inner .preview p {display: inline;}
</style>