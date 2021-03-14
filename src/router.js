import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Home from './components/home/index.vue'
// import About from './components/about/index.vue'

//按需加载路由1
// const About = resolve => require(['@/components/about/index.vue'], resolve)
// const Test = resolve => require(['@/components/test/index.vue'], resolve)


//按需加载路由2
const Home = () => import(/* webpackChunkName: "Home" */ './components/home/index.vue')
const About = () => import(/* webpackChunkName: "About" */ './components/about/index.vue')
const Test = () => import(/* webpackChunkName: "Test" */ './components/test/index.vue')
const NotFond = () => import(/* webpackChunkName: "NotFond" */ './components/404/index.vue')

const routes = [
    {
        path: '/',component: Home
    },
    {
        path: '/about',component: About
    },
    {
        path: '/about-*',component: About
    },
    {
        path: '/test/:id',component: Test
    },{
        path: '*', component: NotFond
    }
]


const router = new VueRouter({
    routes
})

export default router;