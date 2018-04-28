import axios from 'axios'
import store from '@/store/index'
export default {
  get: (url) => {
    return new Promise(async (resolve, reject) => {
      store.commit('SHOW_MASK', true)
      let res
      try {
        res = await axios.get(url)
        resolve({data: res.data})
      } catch (e) {
        reject(console.error(e))
      }
      store.commit('SHOW_MASK', false)
    })
  },
  post: (url, data) => {
    return new Promise(async (resolve, reject) => {
      let res
      try {
        res = await axios.post(url, data)
        resolve({data: res.data})
      } catch (e) {
        reject(console.error(e))
      }
    })
  }
}
