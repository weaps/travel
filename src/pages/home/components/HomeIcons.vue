<template>
  <div class="home-icons-container">
    <swiper :options="swiperIcons">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-box" v-for="item of page" :key="item.id">
          <i class="icon iconfont" :class="item.imgUrl"></i>
          <h5>{{item.textName}}</h5>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperIcons: {
        loop: true // 设置循环滑动
      },
      iconsList: [{
        id: '001',
        imgUrl: 'icon-hp-6vip-on',
        textName: '皇冠会员'
      }, {
        id: '002',
        imgUrl: '',
        textName: '喝酒'
      }, {
        id: '003',
        imgUrl: '',
        textName: '吃鱼'
      }, {
        id: '004',
        imgUrl: '',
        textName: '鲜花'
      }, {
        id: '005',
        imgUrl: '',
        textName: '文件夹'
      }, {
        id: '006',
        imgUrl: '',
        textName: '美食'
      }, {
        id: '007',
        imgUrl: '',
        textName: '汉堡包'
      }, {
        id: '008',
        imgUrl: '',
        textName: '娱乐'
      }, {
        id: '009',
        imgUrl: '',
        textName: '购物'
      }, {
        id: '010',
        imgUrl: '',
        textName: '设置'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-icons-container >>> .swiper-container {
    height 0
    padding-bottom 50%
  }
  .home-icons-container
    width 100%
    height 0
    padding-bottom 50%
    overflow hidden
    background #ddd
    .icon-box {
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      background #06c;
    }
</style>
