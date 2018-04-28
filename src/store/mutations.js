import * as types from './constants'

export default {
  increment (state) {
    state.count++
  },
  incrementBy (state, n) {
    state.count += n
  },
  [types.SET_USER_INFO] (state, loginInfo) {
    state.user_info = loginInfo
  },
  [types.SHOW_MASK] (state, boolean) {
    state.isFetching = boolean
  }
}
