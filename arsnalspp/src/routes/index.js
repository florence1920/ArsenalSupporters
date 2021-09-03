import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '@/views/MainView.vue';
import MatchesView from '@/views/MatchesView.vue';
import TeamView from '@/views/TeamView.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes :[
        {
            path:'/',
            redirect:'/main'
        },
        {
            path:'/main',
            component:MainView
        },
        {
            path:'/team',
            component:TeamView
        },
        {
            path:'/matches',
            component:MatchesView
        },
    ]
})
