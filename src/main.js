// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入swiper 模块
// import fastclick from 'fastclick'2
// 引入通用样式表
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css' // swiper 样式引入

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// fastclick.attach(document.body)3
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// router 路由就是根据网址的不同，返回不同的内容给用户
// npm install fastclick --save 1
// npm install stylus --save  npm install stylus-loader --save 安装stylus，类似于sass
