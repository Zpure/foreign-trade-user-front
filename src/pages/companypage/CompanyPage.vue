<template>
  <div>
    <common-banner :imgSrc="imgPath" :imgLabel="imgLabel"></common-banner>
    <common-main @clickSideMenu="handleSideClick" :title="imgLabel" :menus="sideMenus">
      <div slot="content">
        <introduce-page v-if="activeComponentName === 'IntroducePage'"></introduce-page>
        <news-page :dataSource="dataSource" v-else-if="activeComponentName === 'NewsPage' || 'SituationPage'"></news-page>
      </div>
    </common-main>
  </div>
</template>

<script>
import CommonBanner from '@/pages/common/Banner'
import CommonMain from '@/pages/common/Main'
import IntroducePage from './components/Introduce'
import NewsPage from './components/News'
export default {
  name: 'CompanyPage',
  components: {
    CommonBanner,
    CommonMain,
    IntroducePage,
    NewsPage
  },
  data () {
    return {
      imgPath: '/static/img/banner2.jpg',
      imgLabel: '企业概况',
      sideMenus: [
        {
          id: 'side1',
          key: 'IntroducePage',
          label: '公司简介'
        },
        {
          id: 'side2',
          key: 'NewsPage',
          label: '公司新闻'
        },
        {
          id: 'side3',
          key: 'SituationPage',
          label: '行业动态'
        }
      ],
      activeComponentName: 'IntroducePage',
      dataSource: []
    }
  },
  methods: {
    handleSideClick (name) {
      this.activeComponentName = name
      if (name === 'NewsPage') {
        this.dataSource = [
          {
            id: 'news1',
            imgSrc: '/static/img/banner4.jpg',
            title: '新闻标题',
            description: 'this is description this is description this is description this is description this is description this is description',
            date: '2018-09-09'
          },
          {
            id: 'news2',
            imgSrc: '/static/img/banner4.jpg',
            title: '企业新闻标题',
            description: 'this is description',
            date: '2018-09-09'
          },
          {
            id: 'news3',
            imgSrc: '/static/img/banner4.jpg',
            title: '这是新闻标题',
            description: 'this is description',
            date: '2018-09-09'
          }
        ]
      } else if (name === 'SituationPage') {
        this.dataSource = [
          {
            id: 'situation1',
            imgSrc: '/static/img/banner5.jpg',
            title: '行业动态1',
            description: 'this is description this is description this is description this is description this is description this is description',
            date: '2018-09-09'
          },
          {
            id: 'situation2',
            imgSrc: '/static/img/banner5.jpg',
            title: '行业动态1',
            description: 'this is description',
            date: '2018-09-09'
          },
          {
            id: 'situation3',
            imgSrc: '/static/img/banner5.jpg',
            title: '行业动态3',
            description: 'this is description',
            date: '2018-09-09'
          }
        ]
      } else {
        this.dataSource = []
      }
    }
  }
}
</script>
