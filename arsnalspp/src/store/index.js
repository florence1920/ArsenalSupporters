import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export const store = new Vuex.Store({
    state:{
        matchPreview : {
            'leagueName' : 'Premier League',
            'homeTeam' : 'Arsenal',
            'awayTeam' : 'Norwich',
            'stadium' : 'Emirates Stadium',
            'matchDate' : '2021.09.02'
        },
        player :[
            {
                'name' : 'Bernd Leno',
                'position' : 'GK',
                'backNumber' : 1,
                'goal' : 0,
                'assist' : 100,
                'best' : true
            },
            {
                'name' : 'Kieran Tierney',
                'position' : 'DF',
                'backNumber' : 3,
                'goal' : 1,
                'assist' : 2500,
                'best' : true
            },
            {
                'name' : 'Ben White',
                'position' : 'FW',
                'backNumber' : 4,
                'goal' : 4,
                'assist' : 3,
                'best' : true
            },
            {
                'name' : 'Thomas Partey',
                'position' : 'MF',
                'backNumber' : 5,
                'goal' : 12,
                'assist' : 25,
                'best' : true
            },
            {
                'name' : 'Gabriel Magalhaes',
                'position' : 'DF',
                'backNumber' : 6,
                'goal' : 3,
                'assist' : 1,
                'best' : true
            },
            {
                'name' : 'Bukayo Saka',
                'position' : 'FW',
                'backNumber' : 7,
                'goal' : 1,
                'assist' : 2,
                'best' : true
            },
            {
                'name' : 'Martin Odegaard',
                'position' : 'MF',
                'backNumber' : 8,
                'Goal' : 31,
                'Assist' : 42,
                'best' : true
            },
            {
                'name' : 'Alexandre Lacazette',
                'position' : 'FW',
                'backNumber' : 9,
                'goal' : 52,
                'assist' : 1,
                'best' : true
            },
            {
                'name' : 'Emile Smith Rowe',
                'position' : 'MF',
                'backNumber' : 10,
                'goal' : 1,
                'assist' : 25,
                'best' : true
            },
            {
                'name' : 'Pierre Aubameyang',
                'position' : 'FW',
                'backNumber' : 12,
                'goal' : 110,
                'assist' : 2,
                'best' : true
            },
            {
                'name' : 'Ainsley Maitland-Niles',
                'position' : 'MF',
                'backNumber' : 15,
                'goal' : 0,
                'assist' : 21,
                'best' : false
            },
            {
                'name' : 'Rob Holding',
                'position' : 'DF',
                'backNumber' : 16,
                'goal' : 10,
                'assist' : 1,
                'best' : true
            },
            {
                'name' : 'Cedric Soares',
                'position' : 'DF',
                'backNumber' : 17,
                'goal' : 0,
                'assist' : 10,
                'best' : true
            },
        ],
        //playerEnd
        top3GoalArr :[

        ],
        top3AssiArr :[

        ]
    },
    mutations :{
        goalRecord(state){
            let goalArr = [];
            //let top3GoalArr = [];
            for(let i =0; i < state.player.length; i++){
                goalArr.push({name: state.player[i].name, goal :state.player[i].goal });
            }
            //오름차순 함수 만들기
            function compare(key){
                return (a,b) => (a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0));
            }
            goalArr.sort(compare('goal'));
            state.top3GoalArr = goalArr.slice(0,3);
        },
        assistRecord(state){
            let assiArr = [];
            //Assist새로운 배열 만들기
            for(let i =0; i < state.player.length; i++){
                assiArr.push({name: state.player[i].name, assist :state.player[i].assist });
            }
            //오름 차순 만들기
            function compare(key){
                return (a,b) => (a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0));
            }
            assiArr.sort(compare('assist'));
            state.top3AssiArr =assiArr.slice(0,3);

        }
    }
})
