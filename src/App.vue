<template>
  <div id="app">
    <main-header :currentPath="currentPath"/>
    <router-view/>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from '@/pages/common/Header'
import MainFooter from '@/pages/common/Footer'
export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  },
  data () {
    return {
      currentPath: '/website'
    }
  },
  mounted () {
    this.$router.push('/website')
    // if (this.$router.history.current && this.$router.history.current.path) {
    //   this.currentPath = this.$router.history.current.path
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', 'Helvetica Neue', Helvetica, 'PingFang SC', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1rem;
}
#app #mobile-header .el-collapse-item__arrow {
  display: none !important;
}
</style>
