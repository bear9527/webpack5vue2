<template>
  <div class="not">
    not found
    <hr>
    <div>your is {{ $route.params.pathMatch }}</div>
  </div>
</template>

<script>
export default {
  name: 'notfound',
};
</script>

<style lang="scss" scoped>
.not{
  width: 100vw;
  height: 100vh;
  background: chartreuse;
}
</style>