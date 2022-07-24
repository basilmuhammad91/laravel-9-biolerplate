import { createRouter, createWebHistory } from "vue-router";

import Test from '../components/Test.vue';

const routes = [
    {
        path: "/test",
        name: 'test',
        // component: Test,
        component: require('../components/Test.vue').default,
    }
]

// export default createRouter({
//     history: createWebHistory(),
//     routes
// })

export default routes;
