<template>
  <el-container :class="containerClass">
    <el-main>
      <h2>爸</h2>
      <p>这个是样板</p>
      <p>布局还有文字还有图片什么的都可以修改替换</p>
      <p>您看看有什么不足的或者哪里要改进的可以提提意见</p>
      <p>域名（也就是网址）和服务器我看下来，用腾讯的普通点的每年的费用大概1000元上下</p>
      <p>不过注册域名之后要备案，还要拍照和填材料什么的，整个备案流程大概要1个月，备案后咱们才能使用</p>
      <h2>切割石材和装饰石材</h2>
      <p>在采石场选择石块之后，就会被运往意大利的维罗纳进行加工。每一块石材都拥有独特的物理特性。但是直到该石材被切割之后，才能够评估该石块儿的美感和价值。那些具有最佳花纹和图案的石块儿会被挑选并用于签名石产品系列。</p>
      <p>Antolini采用最新的技术，立足于加工优质精美天然石材行业的前沿。</p>
      <p>公司将继续通过生产创新方案的产品和探索石材行业可能性新方案的满腔激情来开拓创新、勇往直前。</p>
      <div class="img-box">
        <img src="/static/img/home1.jpg" alt="company-concept">
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HomeMain',
  computed: {
    containerClass () {
      return this.$ISMOBILE ? '' : 'container'
    }
  }
}
</script>

<style scoped>
  .container{
    padding: 0 6rem;
  }
  .el-container p {
    line-height: 1.5;
    text-align: justify;
  }
  .img-box {
    padding: 2rem 0;
  }
  .img-box img {
    height: 30rem;
    width: 100%;
  }
</style>
