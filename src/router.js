import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Home from './components/home/index.vue'
// import About from './components/about/index.vue'

// const Home = () => import('./components/home/index.vue')
// // const About = () => import('./components/about/index.vue')
// const About = resolve => require(['@/components/about/index.vue'], resolve)
// const Test = resolve => require(['@/components/test/index.vue'], resolve)


const Home = () => import(/* webpackChunkName: "Home" */ './components/home/index.vue')
const About = () => import(/* webpackChunkName: "About" */ './components/about/index.vue')
const Test = () => import(/* webpackChunkName: "Test" */ './components/test/index.vue')


const routes = [
    {
        path: '/',component: Home
    },
    {
        path: '/about',component: About
    },
    {
        path: '/test',component: Test
    }
]


const router = new VueRouter({
    routes
})

export default router;