require('./bootstrap');
require('admin-lte');

// import Vue from 'vue'
window.Vue = require('vue').default;
window.Fire = new Vue();
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import routes from './routes';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Swal from 'sweetalert2';
import '@mdi/font/css/materialdesignicons.css';

window.axios = require('axios');

// //Component Communication
window.Fire = new Vue();

//Alerts
window.swal = Swal;

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});
window.toast = toast;

Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import {
    Form,
    // HasError,
    // AlertError
} from 'vform';

//Form
window.form = Form;

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi', // default - only for display purposes
        },
    }),
    router
});
