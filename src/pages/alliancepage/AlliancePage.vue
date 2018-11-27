<template>
  <div>
    <common-banner :imgSrc="imgPath" :imgLabel="imgLabel"></common-banner>
    <common-main @clickSideMenu="handleSideClick" :title="imgLabel" :menus="sideMenus">
      <div slot="content">
        <brand-introduce v-if="activeComponentName === 'BrandIntroduce'"></brand-introduce>
        <list-page v-else-if="activeComponentName === 'BrandList'" :dataSource="dataSource"></list-page>
      </div>
    </common-main>
  </div>
</template>

<script>
import CommonBanner from '@/pages/common/Banner'
import CommonMain from '@/pages/common/Main'
import ListPage from '@/pages/productpage/components/List'
import BrandIntroduce from './components/BrandIntroduce'
export default {
  name: 'AlliancePage',
  components: {
    CommonBanner,
    CommonMain,
    ListPage,
    BrandIntroduce
  },
  data () {
    return {
      imgPath: '/static/img/banner1.jpg',
      imgLabel: '品牌联盟',
      dataSource: [
        {
          id: 'brand1',
          imgSrc: '/static/img/banner4.jpg',
          label: '品牌名称'
        },
        {
          id: 'brand2',
          imgSrc: '/static/img/banner4.jpg',
          label: '品牌名称'
        },
        {
          id: 'brand3',
          imgSrc: '/static/img/banner4.jpg',
          label: '品牌名称'
        },
        {
          id: 'brand4',
          imgSrc: '/static/img/banner4.jpg',
          label: '品牌名称'
        },
        {
          id: 'brand5',
          imgSrc: '/static/img/banner4.jpg',
          label: '品牌名称'
        }
      ],
      sideMenus: [
        {
          id: 'alliance1',
          key: 'BrandIntroduce',
          label: '联盟简介'
        },
        {
          id: 'alliance2',
          key: 'BrandList',
          label: '品牌展示'
        }
      ],
      activeComponentName: 'BrandIntroduce'
    }
  },
  methods: {
    handleSideClick (name) {
      this.activeComponentName = name
    }
  }
}
</script>
