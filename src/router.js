import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
// import About from './views/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

export default router;
