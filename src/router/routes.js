// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

export default
  [
    {
      path: '/home',
      component: _ => import('@/pages/Home'),
      meta: { show: true },
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
      meta: { show: true },
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false },
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false },
    },
    {
      name: 'detail',
      path: '/detail/:skuid',
      component: Detail,
      meta: { show: true },
    },
    {
      name: 'addcartsuccess',
      path: '/addcartsuccess',
      component: AddCartSuccess,
      meta: { show: true },
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component: ShopCart,
      meta: { show: true },
    },
    {
      name: 'trade',
      path: '/trade',
      component: Trade,
      meta: { show: true },
      beforeEnter: (to, from, next) => {
        if (from.path == '/shopcart') {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      name: 'pay',
      path: '/pay',
      component: Pay,
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
      component: PaySuccess,
      meta: { show: true },
    },
    {
      name: 'center',
      path: '/center',
      component: Center,
      meta: { show: true },
      children: [
        {
          path: 'myorder',
          component: MyOrder
        },
        {
          path: 'grouporder',
          component: GroupOrder
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