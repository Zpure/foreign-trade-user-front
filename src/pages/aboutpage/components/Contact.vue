<template>
  <el-container>
    <el-main>
      <h3>公司名称</h3>
      <p>地址：上海XXXXXXXXXXXXXXXXXX</p>
      <p>邮编：200000</p>
      <p>电话：18999999999</p>
      <p>传真：021-123456</p>
      <div class="img-box">
        <img src="/static/img/map.jpg" alt="company-concept">
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
.el-main {
  padding: 0;
}
.img-box img {
  width: 100%;
}
.el-main p {
  line-height: 1.5;
  font-size: 1rem;
}
</style>
