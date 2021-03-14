export default {
    namespaced: true,
    state: ()=> ({
        title: '我是vuex-about about title'
    }),
    // state: {
    //     title: '我是vuex-about about title'
    // },
    mutations: {
        titleChange(state,str){
            console.log('我是vuex titleChange',str)
            state.title = str;
        }
    },
    getters: {
        getTitle(state){
            return state.title;
        }
    }
}