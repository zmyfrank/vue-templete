import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const home = () => import('@/components/HelloWorld')
const goods = () => import('@/components/Goods')
const login = () => import('@/components/Login')
const goodsList = () => import('@/components/GoodsList')
const goodsDetail = () => import('@/components/GoodsDetail')
const notFound = () => import('@/components/NotFound')

const router = new Router({
  mode: 'history',
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
        }
      ]
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
