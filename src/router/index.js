import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
// import NewHomeDetail from '@/components/new_home_detail';
Vue.use(Router);

export default new Router({
    // mode: "history",
    // base: '/houseonline/',
    routes: [
        //  { path: '*', component: NotFoundComponent },//错误页
        {
            path: "/",
            name: "index",
            component: Index
        },
        {
            path: "/new_home_detail", //新房详情
            name: "new_home_detail",
            component: resolve =>
                require(["@/components/page/new_home_detail"], resolve)
        },
        {
            path: "/rent_a_house", //租房
            name: "rent_a_house",
            component: resolve => require(["@/components/page/rent_a_house"], resolve)
        },
        {
            path: "/second_hand_house", //二手房
            name: "second_hand_house",
            component: resolve =>
                require(["@/components/page/second_hand_house"], resolve)
        },
        {
            path: "/find_new_home", //找新房
            name: "find_new_home",
            component: resolve =>
                require(["@/components/page/find_new_home"], resolve)
        },
        {
            path: "/dynamic", //最新动态
            name: "dynamic",
            component: resolve => require(["@/components/page/dynamic"], resolve)
        },
        {
            path: "/comment_on", //点评
            name: "comment_on",
            component: resolve => require(["@/components/page/comment_on"], resolve)
        },

        {
            path: "/second_house_detail", //二手房详情
            name: "second_house_detail",
            component: resolve =>
                require(["@/components/page/second_house_detail"], resolve)
        },
        {
            path: "/house_type_all", //全部户型
            name: "house_type_all",
            component: resolve =>
                require(["@/components/page/house_type_all"], resolve)
        },
        {
            path: "/house_type_detail", //户型详情
            name: "house_type_detail",
            component: resolve => require(["@/components/page/house_type_detail"], resolve)
        },
        {
            path: "/map", //户型详情
            name: "map",
            component: resolve => require(["@/components/page/map"], resolve)
        },
        {
            path: "/login", //登录
            name: "login",
            component: resolve => require(["@/components/page/login"], resolve)
        },
        {
            path: "/signup",
            name: "signup",
            component: resolve => require(["@/components/page/signup"], resolve)
        },
        {
            path: "/personal", //个人中心
            name: "personal",
            component: resolve => require(["@/components/page/personal"], resolve)
        }
    ]
});