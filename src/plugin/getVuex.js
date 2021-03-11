import Vue from 'vue'
// import Store from '@/store/index.js'
const getVuex = {
    install: function(){
        Vue.mixin({
            beforeCreate(){
                let name = this.$options.name;
                if(this.$options.isVuex){
                    import("../store/module/" + name).then((res) => {
                        this.$store.registerModule(name, res.default)
                        console.log(res)
                        this.isVuex = false;
                    })
                }
            }
        })
    }
}

export default getVuex;