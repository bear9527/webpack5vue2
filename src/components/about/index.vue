<template>
  <div class="about">
    <!-- <div class="header">title: {{title}}</div> -->
    <div class="header" v-html="title"></div>
    <input type="text" v-model="newtitle">
    <button @click="clickBtn">改变title</button>
    <div>{{ $route.params.pathMatch }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations} from "vuex";

export default {
  name: 'about',
  isVuex: true,
  data: function () {
    return {
      newtitle: '-'
    };
  },
  mounted() {
    // debugger;
    console.log(this.$route.params.pathMatch)
    
  },
  computed: {
    ...mapState({
      title: (state) => {
        //如果为空返回空
        if(!state.about){return ''}
        return state.about.title;
      }
    })
  },
  methods: {
    // ...mapMutations(['titleChange']),
    clickBtn(){
      // this.titleChange(this.newTitle);
      this.$store.commit("about/titleChange",this.newtitle);
    }
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