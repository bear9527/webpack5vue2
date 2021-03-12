// import Vue from 'vue'
// import Store from '@/store/index.js'
const getVuex = {
    install: function(vue){
        vue.mixin({
            beforeCreate(){
                //判断是否需要vuex
                if(!this.$options.isVuex){return;}
                let name = this.$options.name;
                let moduleObj = this.$store._modules.root._children;
                let isReg = false; 
                //判断是否注册过该模块
                Object.keys(moduleObj).forEach((key)=>{
                    if(key === name){
                        isReg = true;
                    }
                })
                console.log('是否注册过：',this.$options.isVuex)
                console.log(name,this.$options.isVuex)
                //并且未注册过
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