/*
    动态注册 vuex 模块
*/
const getVuex = {
    install: function(vue){
        vue.mixin({
            beforeCreate(){
                //判断是否需要vuex
                if(!this.$options.isVuex){return;}
                let name = this.$options.name;
                //判断是否注册过该模块
                let isReg = this.$store.hasModule(name);
                
                //判断是否注册过该模块2
                // let moduleObj = this.$store._modules.root._children;
                // Object.keys(moduleObj).forEach((key)=>{
                //     if(key === name){
                //         isReg = true;
                //     }
                // })

                //未注册的模块进行注册
                if(!isReg){
                    import("../store/module/" + name).then((res) => {
                        this.$store.registerModule(name, res.default);
                    })
                }
            }
        })
    }
}

export default getVuex;