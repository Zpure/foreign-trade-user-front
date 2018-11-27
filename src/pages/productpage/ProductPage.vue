<template>
  <div>
    <common-banner :imgSrc="imgPath" :imgLabel="imgLabel"></common-banner>
    <common-main @clickSideMenu="handleSideClick" :title="imgLabel" :menus="sideMenus">
      <div slot="content">
        <list-page :dataSource="dataSource"></list-page>
      </div>
    </common-main>
  </div>
</template>

<script>
import CommonBanner from '@/pages/common/Banner'
import CommonMain from '@/pages/common/Main'
import ListPage from './components/List'
export default {
  name: 'ProductPage',
  components: {
    CommonBanner,
    CommonMain,
    ListPage
  },
  data () {
    return {
      imgPath: '/static/img/banner3.jpg',
      imgLabel: '产品与服务',
      dataSource: [
        {
          id: 'product1',
          imgSrc: '/static/img/stone1.jpg',
          label: '产品名称'
        },
        {
          id: 'product2',
          imgSrc: '/static/img/stone2.jpg',
          label: '产品名称'
        },
        {
          id: 'product3',
          imgSrc: '/static/img/stone1.jpg',
          label: '产品名称'
        },
        {
          id: 'product4',
          imgSrc: '/static/img/stone2.jpg',
          label: '产品名称'
        },
        {
          id: 'product5',
          imgSrc: '/static/img/stone1.jpg',
          label: '产品名称'
        },
        {
          id: 'product6',
          imgSrc: '/static/img/stone2.jpg',
          label: '产品名称'
        }
      ],
      sideMenus: [
        {
          id: 'side1',
          key: 'ProductList',
          label: '产品列表'
        },
        {
          id: 'side2',
          key: 'ServiceList',
          label: '服务列表'
        }
      ],
      activeComponentName: 'ProductList'
    }
  },
  methods: {
    handleSideClick (name) {
      this.activeComponentName = name
      if (name === 'ProductList') {
        this.dataSource = [
          {
            id: 'product1',
            imgSrc: '/static/img/stone1.jpg',
            label: '产品名称'
          },
          {
            id: 'product2',
            imgSrc: '/static/img/stone2.jpg',
            label: '产品名称'
          },
          {
            id: 'product3',
            imgSrc: '/static/img/stone1.jpg',
            label: '产品名称'
          },
          {
            id: 'product4',
            imgSrc: '/static/img/stone2.jpg',
            label: '产品名称'
          },
          {
            id: 'product5',
            imgSrc: '/static/img/stone1.jpg',
            label: '产品名称'
          },
          {
            id: 'product6',
            imgSrc: '/static/img/stone2.jpg',
            label: '产品名称'
          }
        ]
      } else if (name === 'ServiceList') {
        this.dataSource = [
          {
            id: 'service1',
            imgSrc: '/static/img/home1.jpg',
            label: '服务名称'
          },
          {
            id: 'service2',
            imgSrc: '/static/img/home1.jpg',
            label: '服务名称'
          },
          {
            id: 'service3',
            imgSrc: '/static/img/home1.jpg',
            label: '服务名称'
          },
          {
            id: 'service4',
            imgSrc: '/static/img/home1.jpg',
            label: '服务名称'
          }
        ]
      } else {
        this.dataSource = []
      }
    }
  }
}
</script>
