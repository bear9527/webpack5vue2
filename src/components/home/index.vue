<template>
  <div class="home">
    <div class="top-wrapper">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="center-wrapper">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="buttom-wrapper">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      a: "4"
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
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  background-color: aquamarine;
  color: #fff;
  .top-wrapper{
    display:flex;
    // justify-content:flex-end;
    // flex-direction: row-reverse;
    // justify-content: space-around;
    // justify-content:space-between;
    // flex-direction:row-reverse;
    flex-direction: row;
    
    width: 100%;
    background-color: cornflowerblue;
    span{
      width: 80px;
      height: 30px;
      background-color: coral;
      text-align: center;
      line-height: 30px;
    }
    span:nth-child(2){
      // flex: 0 1 auto;
      flex:1 1 420px;
      background-color: #ddd;
    }
  }
  .center-wrapper{
    display:flex;
    // flex-direction: row-reverse;
    flex-direction: column;
    align-items:center;
    // justify-content: space-around;x
    justify-content: space-between;
    width: 100%;
    height: 280px;
    background-color: darksalmon;
    span{
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background-color: deeppink;
    }
  }
  .buttom-wrapper{
    display: flex;
    // flex-wrap: wrap;
    flex-flow: row wrap;
    // justify-content: space-around;
    justify-content: space-between;
    align-content:space-between;
    // align-items:space-between;
    width: 100%;
    height: 540px;
    background-color: deepskyblue;
    text-align: center;
    span{
      width: 110px;
      height: 80px;
      background-color: firebrick;
    }
  }
}
</style>