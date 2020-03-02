// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store'; //vuex
import { IndexBar, IndexAnchor, Cell, Swipe, SwipeItem, Lazyload } from 'vant';
import 'vant/lib/index.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import preview from 'vue-photo-preview' //预览图片
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

axios.defaults.timeout = 5000;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})