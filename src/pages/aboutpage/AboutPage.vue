<template>
  <div>
    <common-banner :imgSrc="imgPath" :imgLabel="imgLabel"></common-banner>
    <common-main @clickSideMenu="handleSideClick" :title="imgLabel" :menus="sideMenus">
      <div slot="content">
        <contact-us v-if="activeComponentName === 'ContactUs'"></contact-us>
        <h3 v-else-if="activeComponentName === 'HumanResource'">暂无信息</h3>
      </div>
    </common-main>
  </div>
</template>

<script>
import CommonBanner from '@/pages/common/Banner'
import CommonMain from '@/pages/common/Main'
import ContactUs from './components/Contact'
export default {
  name: 'AboutPage',
  components: {
    CommonBanner,
    CommonMain,
    ContactUs
  },
  data () {
    return {
      imgPath: '/static/img/home1.jpg',
      imgLabel: '关于我们',
      sideMenus: [
        {
          id: 'about1',
          key: 'ContactUs',
          label: '联系我们'
        },
        {
          id: 'about2',
          key: 'HumanResource',
          label: '人才招聘'
        }
      ],
      activeComponentName: 'ContactUs'
    }
  },
  methods: {
    handleSideClick (name) {
      this.activeComponentName = name
    }
  }
}
</script>
