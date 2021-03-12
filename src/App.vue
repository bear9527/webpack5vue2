<template>
    <div class="">
    <Header></Header>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </div>
</template>

<script>
import Header from '@/components/public/Header'
export default {
  name: 'App',
  components: { Header }
}
</script>

<style>

</style>