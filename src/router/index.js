import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

import store from '@/store'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token
  let name = store.state.user.userInfo.name

  if (token) {
    if (to.path == '/login' || to.path == '/register') {
      next('/')
    } else {
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  } else {
    if (to.path == '/trade' || to.path == '/pay' || to.path.indexOf('/center') != -1) {
      next('/login?redirect=' + to.path)
    } else {
      next()
    }
  }
})

export default router