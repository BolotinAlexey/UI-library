import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return import(/* webpackChunkName: "about" */ '../views/About.vue'); },
    },
    {
        path: '/button',
        name: 'MyButtonView',
        component: function () { return import('../views/MyButtonView.vue'); },
    },
    {
        path: '/grid',
        name: 'MyGridView',
        component: function () { return import('../views/MyGridView.vue'); },
    },
    {
        path: '/modal',
        name: 'Modal',
        component: function () { return import('../views/MyModalView.vue'); },
    },
    {
        path: '/carousel',
        name: 'Carousel',
        component: function () { return import('../views/MyCarouselView.vue'); },
    },
    {
        path: '/table',
        name: 'Table',
        component: function () { return import('../views/MyTableView.vue'); },
    },
    {
        path: '/navbar',
        name: 'Navbar',
        component: function () { return import('../views/NavbarView.vue'); },
    },
];
var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
});
export default router;
//# sourceMappingURL=index.js.map