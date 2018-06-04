// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../static/reset.css'
import './common/mock/index'
import './common/scss/index.scss'
import lodash from 'lodash'

Object.defineProperty(Vue.prototype, '$lodash', {value: lodash})
Vue.config.productionTip = false

Vue.use(element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
