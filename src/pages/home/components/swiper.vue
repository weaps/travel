<template>
  <div class="seiper-wrap">
    <!-- :options 绑定了一个叫 swiperOption 事件 -->
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      // 在这里要定义一个被绑定的事件
      swiperOption: {
        pagination: '.swiper-pagination', // 显示小圆点
        loop: true // 设置循环滑动
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://img1.360buyimg.com/da/jfs/t24481/298/536866081/200000/1ec9ae5d/5b344829Na3ff8a42.jpg'
      }, {
        id: '002',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s1125x690_jfs/t20200/4/1724323640/182531/2e785346/5b32f4cfN9154bc82.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .seiper-wrap
    width 100%
    overflow hidden
    .swiper-img
      width 100%
</style>
// npm install vue-awesome-swiper@2.6.7 --save
