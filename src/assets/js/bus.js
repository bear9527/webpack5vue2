import Vue from 'vue'
const Bus = new Vue()
let aaab = new Promise((resolve,reject)=>{
    resolve("d")
  }).then((str)=>{
    alert(str)
  })
  console.log(aaab)
Vue.prototype.$bus = Bus;
Object.defineProperty(Vue.prototype, '$bus',{
    writable:false
})
export default Bus;