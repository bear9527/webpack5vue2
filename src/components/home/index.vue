<template>
  <div class="home">
    this is home index {{a}}
    <img src="../../assets/images/1.png" alt="">

    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "aaa"
    };
  },
  created() {

    this.$bus.$on('changeValue',(msg,val)=>{
        console.log("msg,val")
        console.log(msg,val)
        this.a = msg;
    });
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 500px;
  height: 500px;
  background-color: aquamarine;
//   background-image: url('../../assets/images/1.png');
  color: #fff;
}
</style>