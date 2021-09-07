<template>
    <div class="outer">
        <div class="inner">
            <ul class="record">
                <li>
                    <ul>
                        <p>goal</p>
                        <li class="player_name" v-for="player in top3GoalArr" v-bind:key="player.name">
                            <p> {{ player.name}} {{player.goal}} </p>
                        </li>
                    </ul>
                    <ul>
                        <p>assist</p>
                        <li class="player_name" v-for="player in top3AssiArr" v-bind:key="player.name">
                            <p> {{ player.name}} {{player.assist}} </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            goalArr:[],
            top3GoalArr:[],
            assiArr:[],
            top3AssiArr:[]
        }
    },
    created(){
        //Goal새로운 배열 만들기
        for(let i =0; i < this.$store.state.player.length; i++){
            this.goalArr.push({name: this.$store.state.player[i].name, goal :this.$store.state.player[i].goal });
        }
        //오름차순 함수 만들기
        function compare(key){
            return (a,b) => (a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0));
        }
        this.goalArr.sort(compare('goal'));
        this.top3GoalArr =this.goalArr.slice(0,3);

        //Assist새로운 배열 만들기
        for(let i =0; i < this.$store.state.player.length; i++){
            this.assiArr.push({name: this.$store.state.player[i].name, assist :this.$store.state.player[i].assist });
        }
        this.assiArr.sort(compare('assist'));
        this.top3AssiArr =this.assiArr.slice(0,3);
        /* 
        console.log(this.goalArr);
        function compare(key){
            return (a,b) => (a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0));
        }
        this.$store.state.player.sort(compare('goal'));
        */
    }

}
</script>

<style scoped>
    .outer {width: 100%; color: #fff; background: #073F8A;}
    .outer .inner {overflow: hidden; width: 90%;  background: #003377; padding: 5PX 10PX; margin: 0 auto;}
    .outer .inner .record li ul {float: left; width: 50%; background: #003377;}
    .outer .inner .record li ul p {font-size: 15px; font-weight: 600; margin: 0 0 10px 0;}
    .outer .inner .record li ul li {margin: 5px 0;}
    .outer .inner .record .player_name p {font-size: 12px; font-weight: 400;}
</style>