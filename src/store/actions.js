export default {
  increment ({commit}) {
    commit('increment')
  },
  incrementBy ({commit}, a) {
    setTimeout(() => {
      commit('incrementBy', a)
    }, 1000)
  }
}
