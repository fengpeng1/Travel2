import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
