<template>
  <el-container id="header">
    <el-header class="hidden-xs-only fixed">
      <el-row>
        <el-col :span="6" class="logo-box" v-on:click="iconClick">
          <img v-on:click="iconClick" class="logo" src="@/assets/images/logo.svg" alt="logo">
          <strong v-on:click="iconClick">公司LOGO</strong>
        </el-col>
        <el-col :span="14" :offset="4">
          <el-menu
            @select="handleSelect"
            :default-active="activeIndex"
            mode="horizontal"
            text-color="#2c3e50">
            <el-menu-item v-for="(menu, index) in menus" :key="menu.id" :index="index.toString()">
              {{menu.label}}
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-row id="mobile-header" class="hidden-sm-and-up">
      <el-collapse v-model="name" accordion @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            <el-row id="mobile-navbar" type="flex" justify="space-between" align="middle">
              <img class="logo" src="@/assets/images/logo.svg" alt="logo">
              <i :class="iconClass"></i>
            </el-row>
          </template>
          <el-menu
            @select="handleSelect"
            :default-active="activeIndex"
            mode="vertical"
            style="z-index: 99"
            text-color="#2c3e50">
            <el-menu-item v-for="(menu, index) in menus" :key="menu.id" :index="index.toString()">
              {{menu.label}}
            </el-menu-item>
          </el-menu>
        </el-collapse-item>
      </el-collapse>
    </el-row>
  </el-container>
</template>

<script>
  export default {
    name: 'MainHeader',
    data() {
      return {
        activeIndex: '0',
        name: '0',
        menus: [
          {
            "id": "nav1",
            "label": "首页",
            "path": "/website/"
          },
          {
            "id": "nav2",
            "label": "企业概况",
            "path": "/website/company"
          },
          {
            "id": "nav3",
            "label": "产品与服务",
            "path": "/website/product"
          },
          {
            "id": "nav4",
            "label": "品牌联盟",
            "path": "/website/alliance"
          },
          {
            "id": "nav5",
            "label": "关于我们",
            "path": "/website/about"
          }
        ],
        opened: false
      }
    },
    props: {
      currentPath: {
        type: String,
        default: '/'
      }
    },
    mounted() {
      this.menus.forEach((menu, index) => {
        if (menu.path === this.currentPath) {
          this.activeIndex = index.toString()
        }
      })
    },
    computed: {
      iconClass() {
        return this.opened ? 'el-icon-menu is-opened' : 'el-icon-menu'
      }
    },
    methods: {
      iconClick() {
        this.activeIndex = '0';
        this.$router.push('/website');
      },
      handleSelect(val) {
        this.activeIndex = val;
        this.name = '0';
        const path = this.menus[val].path;
        this.$router.push(path);
      },
      handleChange() {
        this.opened = !this.opened
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  .logo-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .el-icon-menu {
    transition: all .8s;
    transform: rotate(0deg);
  }

  .el-icon-menu.is-opened {
    transform: rotate(45deg);
  }

  #mobile-header {
    padding: 0 1rem;
  }

  #mobile-header .logo {
    width: 3rem;
    height: 3rem;
  }

  #header .el-menu {
    border: none;
  }

  #mobile-navbar {
    height: 100%;
  }

  #mobile-navbar i {
    font-size: 1.5rem;
  }

  .fixed {
    position: fixed;
    z-index: 100;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 15px #666;
  }
</style>
