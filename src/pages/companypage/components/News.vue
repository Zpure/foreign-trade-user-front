<template>
  <el-container>
    <el-main>
      <el-row v-for="item in dataSource" :key="item.id" :gutter="10">
        <el-col :span="6">
          <div
          class="image"
          :style="{
          background: 'url(' + item.imgSrc + ') no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'}" />
        </el-col>
        <el-col :span="18">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <p class="date">{{item.date}}</p>
        </el-col>
      </el-row>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'NewsPage',
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
.image {
  width: 100%;
  height: 8rem;
}
.el-row {
  border-bottom: 1px solid #ececec;
}
.el-row+.el-row {
  margin-top: 2rem;
}
.el-col p,
.el-col h2 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666;
}
.el-col p.date {
  text-align: right;
}
.el-pagination {
  margin-top: 2rem;
  text-align: center;
}
</style>
