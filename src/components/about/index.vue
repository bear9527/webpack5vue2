<template>
  <div class="about">
    <div class="header">count {{count}}</div>
    <button @click="subOne">-</button>
    <button @click="subN">-N</button>
    <input type="text" :value="count"> 
    <button @click="addOne">+</button> 
    <button @click="addN">+N</button> 
    <hr>
    {{viewCount}}
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data: function () {
    return {
      b: "bbb-add  111",
      arr: [1, 2, 3, 4, 5, 6, 7],
      aaa: {
        a: "a",
        b: undefined,
      },
    };
  },
  mounted() {
    // debugger;
    var p1 = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("a");
      }, 4000);
    });
    var p2 = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("b");
      }, 1000);
    });
    var p3 = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("c");
      }, 1000);
    });


  // 手写Promise.all()
  let promiseAll = function(promisList){
    const promisLists= Array.from(promisList);
    const promisListsLen = promisLists.length;
    let count = 0;
    const defaultList = [];
    return new Promise((resolve,reject)=>{
      promisLists.forEach((p,index)=>{
        // console.log(p,index)
        p.then(function(str){
          defaultList[index] = str;
          count++;
          console.log(promisListsLen,count);
          if(count >= promisListsLen){
              resolve(defaultList)
          }
        });
      })
    })
  }

  promiseAll([p1,p2,p3]).then(function(defaultS){
    console.log('promiseAll then',defaultS)
  });


  // console.log('this.$store.state.count',this.$store.state.count)
  // console.log(...mapState)
// axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

axios({
  method:'get',
  url:'/api/test.json'
}).then((res)=>{

  console.log('res',res)
      // this.$store.commit("subStateN",res.status);
      this.$store.dispatch("addNAsync",res.status);
})

    //通过中央总线传值
    this.$bus.$emit("changeValue", this.b, "ddd");
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['viewCount'])
  },
  methods: {
    ...mapMutations(["addStateOne","subStateOne","addStateN","subStateN"]),
    ...mapActions(["addNAsync"]),
    addOne(){
      // this.addStateOne();
      this.$store.commit("addStateOne");
    },
    subOne(){
      this.subStateOne(123);
    }, 
    addN(){
      this.addNAsync(3);
      // this.$store.dispatch("addNAsync",3);
    },
    subN(){
      // this.subStateOne();
      
      this.$store.commit("subStateN",3);
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  height: 500px;
  background-color: aquamarine;
  // background-image: url('../../assets/images/2.jpg');
  // transform: rotate(10deg);
}

.ddd {
  p:nth-child(1) {
    margin-bottom: 13px;
    // display: inline-block;
    // position: absolute;
    height: 20px;
  }
  p:nth-child(2) {
    margin-top: 87px;
    height: 20px;
    // position: absolute;
    // padding: 1px 0;
  }
  .box {
    width: 300px;
    height: 300px;
    background-color: rgb(196, 226, 24);
    // overflow: hidden;
    border: 1px;
    padding: 1px;
    .b1 {
      margin-top: 30px;
      width: 100px;
      height: 100px;
      background-color: rgb(51, 102, 4);
      // float: left;
      position: absolute;

      // display:inline-block;
    }
  }
  .box1 {
    width: 300px;
    height: 300px;
    background-color: rgb(226, 24, 58);
    box-sizing: border-box;
    border: 1px;
    padding: 1px;
  }
}
</style>