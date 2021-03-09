<template>
  <div class="about">
    <div class="header">count {{ count }}</div>
    <button @click="subOne">-</button>
    <button @click="subN">-N</button>
    <input
      type="text"
      :value="count"
    />
    <button @click="addOne">+</button>
    <button @click="addN">+N</button>
    <hr />
    {{ viewCount }}
    <br>
    {{getData}}
    <hr />
    <button
      v-permission="1"
      @click="GET"
    >GET</button>
    <button
      v-permission="1"
      @click="GET"
    >GET</button>
    <button
      v-permission="2"
      @click="POST"
    >POST</button>
    <button
      v-permission="3"
      @click="PUT"
    >PUT</button>
    <button
      v-permission="'demo'"
      @click="DELETE"
    >DELETE</button>
    <button
      v-permission=""
      @click="DELETE"
    >ddd</button>

  </div>
</template>

<script>
import http from "axios";
// import {http} from '@/assets/js/http.js' //自己封装的
import "@/assets/js/directive.js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
var cancel;
var CancelToken = http.CancelToken;
export default {
  data: function () {
    return {
      getData: {},
    };
  },
  mounted() {
    // debugger;

    
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["viewCount"]),
  },
  methods: {
    ...mapMutations(["addStateOne", "subStateOne", "addStateN", "subStateN"]),
    ...mapActions(["addNAsync"]),
    addOne() {
      // this.addStateOne();
      this.$store.commit("addStateOne");
    },
    subOne() {
      this.subStateOne(123);
    },
    addN() {
      this.addNAsync(3);
      // this.$store.dispatch("addNAsync",3);
    },
    subN() {
      // this.subStateOne();
      this.$store.commit("subStateN", 3);
    },
    GET() {
      console.log(typeof cancel)
      // debugger
      if(typeof cancel === 'function'){
        cancel('把上次的请求取消了')
        // console.log('把上次的请求取消了')
      }
      http({
        method: "get",
        url: "/posts",
        params: {
          id: 2,
        },
        cancelToken: new CancelToken(function executor(c) {
          // console.log(c)
          cancel = c;
        }),
      }).then(
        (response) => {
          cancel = null;
          console.log("res qqq", response);
          this.getData = response.data;
        },
        (error) => {
          if(http.isCancel(error)) {
            console.log('请求取消的错误', error.message)
          }else{
            cancel = null;
            console.log('get',error);
          }
        }
      );
      // setTimeout(function () {
      //   if (typeof cancel === "function") {
      //     cancel("取消了请求");
      //   } else {
      //     console.log("没有可取消的请求");
      //   }
      // },50);
    },
    POST() {
      http({
        method: "POST",
        url: "/posts",
        data: {
          title: "json-server888",
          author: "typicode888",
        },
      }).then((res) => {
        console.log("res", res);
        this.getData = res.data;
      });
    },
    PUT() {
      http({
        method: "PUT",
        url: "/posts/3",
        data: {
          title: "json-server777",
          author: "typicode777",
        },
      }).then((res) => {
        console.log("res", res);
        this.getData = res.data;
      });
    },
    DELETE() {
      http({
        method: "DELETE",
        url: "/posts/",
        params: {
          id: 4,
        },
      }).then(
        (response) => {
          console.log("DELETE", response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
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