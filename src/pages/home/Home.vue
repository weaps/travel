<template>
  <div>
    <indexheader></indexheader>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <!-- <img src="./assets/images/Logo.png"> -->
    <!-- <router-link to='./list'>home</router-link> -->
  </div>
</template>

<script>
import indexheader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/HomeIcons'
export default {
  name: 'Home',
  components: {
    indexheader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style></style>
