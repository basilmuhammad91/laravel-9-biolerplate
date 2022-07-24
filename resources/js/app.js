require('./bootstrap');
require('admin-lte');

// import Vue from 'vue'
window.Vue = require('vue').default;
window.Fire = new Vue();
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('Test', require('./components/Test.vue').default)

const app = new Vue({
    el: '#app',
});
