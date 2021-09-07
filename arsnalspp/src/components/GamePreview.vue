<template>
    <div class="theme">
        <div class="outer">
            <div class="inner_box">

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
                <p class="stadium">Emirates Stadium</p>
                <p class="date">2021. 09. 10</p>
            </div>
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
    .theme {width: 100%; color: #fff; font-size: 20px;}
    .theme .outer {background: #003377;}
    .theme .outer .inner_box {overflow: hidden; width: 90%; background: #073F8A; margin: 20px auto; text-align: center;}
    .theme .outer .inner_box span {float: right;}
    .theme .outer .inner_box .preview p {display: inline;}
</style>