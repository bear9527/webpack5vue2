import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/reset.css'
import Vue from 'vue';
import router from './router'
import App from './App.vue'
import store from './store/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Bus from './assets/js/bus.js'

Vue.use(ElementUi)
Vue.use(Bus)
const app = new Vue({
    el: '#root',
    store,
    router,
    // components: { App },
    render: h => h(App)
})