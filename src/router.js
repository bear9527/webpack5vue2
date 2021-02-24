import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/home/index.vue'
import About from './components/about/index.vue'


const routes = [
    {
        path: '/',component: Home
    },
    {
        path: '/about',component: About
    }
]


const router = new VueRouter({
    routes
})

export default router;