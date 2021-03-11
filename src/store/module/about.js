const about = {
    state:()=>{
        title: '我是vuex-about 我是about title'
    },
    mutations: {
        titleChange(state,str){
            state.title = str;
        }
    }
}

export default about;