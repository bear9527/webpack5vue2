const about = {
    namespaced:true,
    state: ()=> ({
        title: '我是vuex-test 我是test title'
    }),
    mutations: {
        titleChange(state,str){
            state.title = str;
        }
    }
}

export default about;