<template>
  <div>
    <main-banner></main-banner>
    <home-main></home-main>
  </div>
</template>

<script>
import MainBanner from './components/Banner'
import HomeMain from './components/Main'

export default {
  name: 'HomePage',
  components: {
    MainBanner,
    HomeMain
  }
}
</script>
