import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        addStateOne(state){
            state.count++;
        },
        subStateOne(state,step){
            // console.log()
            state.count--;
        },
        addStateN(state,step){
            state.count += step;
        },
        subStateN(state,step){
            setTimeout(()=>{
                state.count -= step;
            },3000);
        }
    },
    actions: {
        addNAsync(context,step){
            console.log(context.dispatch);
            setTimeout(()=>{
                context.commit('addStateN',step);
            },3000);
        }
    },
    getters: {
        viewCount(state){
            return `这是我的一个数据：${state.count}`
        }
    }
})
    
