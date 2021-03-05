<template>
  <div class="header">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于我们</router-link>
    <div class="search-wrapper">
        <input type="text" class="search" :value="count">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'Header',
    computed: {
        ...mapState(['count'])
    }
}
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    width: 100%;
    height: 50px;
    max-width: 540px;
    margin: 0 auto;
    line-height: 50px;
    background-color: burlywood;
    a{
        width: 90px;
        display: block;
        color: #000;
        text-decoration-line: none;
        text-align: center;
    }
    .search-wrapper{
        display: flex;
        flex-direction:column;
        justify-content: center;
        flex: 1;
        .search{
            align-self: center;
            width: 90%;
            border:1px solid #ccc;
        }
    }
}
</style>