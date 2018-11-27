<template>
  <el-container :class="className">
    <el-row :gutter="10">
      <el-col :span="6">
        <h3 class="side-menu-title">
          <i class="el-icon-document"></i>
          {{title}}
        </h3>
        <el-menu
          @select="handleSelect"
          :default-active="activeIndex"
          class="side-menu"
          background-color="#2c3e50"
          text-color="#fff"
          active-text-color="#ffcc00">
          <el-menu-item v-for="(menu, index) in menus" :key="menu.id" :index="index.toString()">
            <div slot="title">
              <span>{{menu.label}}</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header">
            <strong>{{contentTitle}}</strong>
          </div>
          <slot name="content"></slot>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'CommonMain',
  props: {
    title: {
      type: String,
      required: true
    },
    menus: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleSelect (val) {
      this.activeIndex = val.toString()
      this.$emit('clickSideMenu', this.menus[val].key)
    }
  },
  computed: {
    contentTitle () {
      return this.menus[this.activeIndex].label
    },
    className () {
      return this.$ISMOBILE ? 'mobile-container' : ''
    }
  }
}
</script>

<style scoped>
.el-container {
  padding: 0 6rem;
  margin: 2rem 0 ;
}
.el-container.mobile-container {
  padding: 0;
}
.el-row {
  width: 100%;
}
.side-menu li {
  border-bottom: 1px solid #fff;
}
.side-menu-title {
  margin: 0;
  padding: 1.5rem 1rem;
  background: #ffcc00;
  color: #fff
}
.side-menu-title>i {
  font-size: 1.5rem;
}
.el-menu {
  border: none;
}
.el-menu-item>div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-card__header {
  padding: 1.7rem 2rem;
}
.box-card strong {
  font-size: 1.6rem;
  color: #2c3e50;
}
</style>
