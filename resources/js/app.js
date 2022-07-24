require('./bootstrap');
require('admin-lte');

// import Vue from 'vue'
window.Vue = require('vue').default;
window.Fire = new Vue();
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import routes from './routes';
import Test from './components/Test.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.component('Test', require('./components/Test.vue').default)

// createApp({
//     components: {
//         Test
//     }
// }).use(router).mount('#app')

const app = new Vue({
    el: '#app',
    router
});
