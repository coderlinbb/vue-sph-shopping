import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

import '@/mock/mockServe.js'

import * as API from '@/api'

Vue.config.productionTip = false

import "swiper/css/swiper.css"

//element-ui
import { Button, MessageBox } from 'element-ui';
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import atm from '@/assets/images/atm.gif'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: atm
})

import '@/plugins/validate'

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
    Vue.prototype.$API = API //安装全局事件总线
  },
}).$mount('#app')
