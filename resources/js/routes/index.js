const routes = [
    {
        path: "/test", name: 'test', component: require('../components/Test.vue').default,
    },
    {
        path: "/users", name: 'users', component: require('../components/users.vue').default,
    },
]

export default routes;
