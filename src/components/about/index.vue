<template>
  <div class="about">
    <div class="header"></div>

  </div>
</template>

<script>
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
    let conter = 0;
    const defaultList = [];
    return new Promise((resolve,reject)=>{

    })
  }







    //通过中央总线传值
    this.$bus.$emit("changeValue", this.b, "ddd");
  }
};
</script>

<style lang="scss" scoped>
.about {
  width: 500px;
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