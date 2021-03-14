export default {
    namespaced: true,
    state: ()=> ({
        title: '我是vuex-test 我是test title'
    }),
    // state: {
    //     title: '我是vuex-test 我是test title'
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