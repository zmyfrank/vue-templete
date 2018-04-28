import ajax from '../common/axios/http'
import * as types from './constants'

export default {
  increment ({commit}) {
    commit('increment')
  },
  incrementBy ({commit}, a) {
    setTimeout(() => {
      commit('incrementBy', a)
    }, 1000)
  },
  loginInfo ({commit}) {
    return new Promise(async (resolve, reject) => {
      let res
      try {
        res = await ajax.get('login')
        commit(types.SET_USER_INFO, res)
        resolve()
      } catch (e) {
        reject(console.error(e))
      }
    })
  }
}
