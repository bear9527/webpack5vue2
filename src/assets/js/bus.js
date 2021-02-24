import Vue from 'vue'
const Bus = new Vue()

Vue.prototype.$bus = Bus;
Object.defineProperty(Vue.prototype, '$bus',{
    writable:false
})
export default Bus;