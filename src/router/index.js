import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/index';
import NewHomeDetail from '@/components/new_home_detail';
import Login from "@/components/login";
import Signup from "@/components/signup";
import Personal from "@/components/personal";
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        //  { path: '*', component: NotFoundComponent },//错误页
        {
            path: '/',
            name: 'index',
            component: HelloWorld
        },
        {
            path: '/new_home_detail', //
            name: "new_home_detail",
            component: NewHomeDetail //resolve => require(['@/components/new_home_detail'], resolve),
        },
        {
            path: '/find_new_home',
            name: 'find_new_home',
            component: resolve => require(['@/components/find_new_home'], resolve),
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/personal',
            name: 'personal',
            component: Personal
        }
    ]
})