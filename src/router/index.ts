import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import MyButtonView from '../views/MyButtonView.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/button',
    name: 'MyButtonView',
    component: () => import(/* webpackChunkName: "button" */ '../views/MyButtonView.vue'),
  },
  {
    path: '/grid',
    name: 'MyGridView',
    component: () => import(/* webpackChunkName: "grid" */'../views/MyGridView.vue'),
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/MyModalView.vue'),
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: () => import(/* webpackChunkName: "carousel" */ '../views/MyCarouselView.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "table" */ '../views/MyTableView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
