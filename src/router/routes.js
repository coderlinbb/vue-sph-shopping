

export default
  [
    {
      path: '/home',
      component: () => import('@/pages/Home'),
      meta: { show: true },
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: () => import('@/pages/Search'),
      meta: { show: true },
    },
    {
      path: '/login',
      component: () => import('@/pages/Login'),
      meta: { show: false },
    },
    {
      path: '/register',
      component: () => import('@/pages/Register'),
      meta: { show: false },
    },
    {
      name: 'detail',
      path: '/detail/:skuid',
      component: () => import('@/pages/Detail'),
      meta: { show: true },
    },
    {
      name: 'addcartsuccess',
      path: '/addcartsuccess',
      component: () => import('@/pages/AddCartSuccess'),
      meta: { show: true },
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component: () => import('@/pages/ShopCart'),
      meta: { show: true },
    },
    {
      name: 'trade',
      path: '/trade',
      component: () => import('@/pages/Trade'),
      meta: { show: true },
      beforeEnter: (to, from, next) => {
        if (from.path == '/shopcart' || from.path == '/login') {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      name: 'pay',
      path: '/pay',
      component: () => import('@/pages/Pay'),
      meta: { show: true },
      beforeEnter: (to, from, next) => {
        if (from.path == "/trade") {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      name: 'paysuccess',
      path: '/paysuccess',
      component: () => import('@/pages/PaySuccess'),
      meta: { show: true },
    },
    {
      // name: 'center',
      path: '/center',
      component: () => import('@/pages/Center'),
      meta: { show: true },
      children: [
        {
          path: 'myorder',
          component: () => import('@/pages/Center/MyOrder')
        },
        {
          path: 'grouporder',
          component: () => import('@/pages/Center/GroupOrder')
        },
        {
          path: '',
          redirect: 'myorder'
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]