<template>
  <div class="about">
    this is about {{b}}
    <img src="../../assets/images/2.jpg" alt="">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      b: "bbb",
    };
  },
  created() {
    this.$bus.$emit('changeValue',this.b,'ddd')
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 500px;
  height: 500px;
  background-color: aquamarine;
  background-image: url('../../assets/images/2.jpg');
  transform: rotate(10deg);
}
</style>