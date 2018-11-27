<template>
  <el-carousel id="container" trigger="click" :height="bannerHeight">
    <el-carousel-item v-for="image in images" :key="image.id">
      <div
        v-on:click="mainBannerClick(image.uri)"
        class="image"
        :style="{
          background: 'url(' + image.path + ') no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'}"
      >
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'MainBanner',
    data() {
      return {
        activeIndex: '1',
        images: []
      }
    },
    methods: {
      mainBannerClick(uri) {
        this.$router.push({ path: '/website/company' });
      }
    },
    mounted() {
      axios.get('../static/mock/banner-img.json')
        .then(res => {
          if (res.data.imgs && res.data.imgs.length > 0) {
            this.images = res.data.imgs
          }
        })
    },
    computed: {
      bannerHeight() {
        return this.$ISMOBILE ? '15rem' : '35rem'
      }
    }

  }
</script>

<style scoped>
  #container .image {
    width: 100%;
    height: 100%;
  }
</style>
