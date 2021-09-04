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
        ]
        
    }
})
