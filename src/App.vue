<template>
    <div class="">
    <Header></Header>
    <router-view></router-view>
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