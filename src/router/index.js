import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const home = () => import('@/components/HelloWorld')
const goods = () => import('@/components/Goods')
const login = () => import('@/components/Login')
const goodsList = () => import('@/components/GoodsList')
const goodsDetail = () => import('@/components/GoodsDetail')
const goodsStoreList = () => import('@/components/GoodsStoreList')
const groupStart = () => import('@/components/GroupStart')
const groupInvite = () => import('@/components/GroupInvite')
const cardPackage = () => import('@/components/CardPackage')
const mine = () => import('@/components/Mine')
const myOrderList = () => import('@/components/MyOrderList')
const myOrderDetail = () => import('@/components/MyOrderDetail')
const goodsOrder = () => import('@/components/GoodsOrder')
const notFound = () => import('@/components/NotFound')

const test = () => import('@/components/Test')

const router = new Router({
  // mode: 'history',
  routes: [
    {
      name: '404页面',
      path: '*',
      component: notFound
    },
    {
      path: '/',
      redirect: '/goods/goodsList'
    },
    {
      path: '/test',
      component: test,
      meta: {
        title: '测试'
      }
    },
    {
      path: '/goods',
      component: goods,
      children: [
        {
          path: 'goodsList',
          component: goodsList,
          meta: {
            title: '商品列表'
          }
        },
        {
          path: 'goodsDetail',
          component: goodsDetail,
          meta: {
            title: '商品详情'
          }
        },
        {
          path: 'goodsStoreList',
          component: goodsStoreList,
          meta: {
            title: '可用分店'
          }
        },
        {
          path: 'goodsOrder',
          component: goodsOrder,
          meta: {
            title: '下单'
          }
        }
      ]
    },
    {
      path: '/group/groupStart',
      component: groupStart,
      meta: {
        title: '发起拼团'
      }
    },
    {
      path: '/group/groupInvite',
      component: groupInvite,
      meta: {
        title: '发起拼团'
      }
    },
    {
      path: '/cardPackage',
      component: cardPackage,
      meta: {
        title: '我的卡包'
      }
    },
    {
      path: '/mine',
      component: mine,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/myOrderList',
      component: myOrderList,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/myOrderDetail',
      component: myOrderDetail,
      meta: {
        title: '订单详情'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登录'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
