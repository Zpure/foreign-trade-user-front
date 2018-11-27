<template>
  <el-container>
    <el-main>
      <el-row :gutter="10">
        <el-col :span="8" v-for="item in dataSource" :key="item.id">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.imgSrc" class="image">
            <div style="padding: 14px;">
              <strong>{{item.label}}</strong>
              <p>这是详情描述</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ListPage',
  props: {
    dataSource: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.el-main {
  padding: 0;
}
.el-col {
  margin-top: 2rem;
}
.image {
  width: 100%;
  height: 10rem;
  display: block;
}
.el-card p,
.el-card strong {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
.el-card p {
  color: #666;
  margin-bottom: 0;
  font-size: .8rem;
}
</style>
