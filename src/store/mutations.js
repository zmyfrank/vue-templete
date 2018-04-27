export default {
  increment (state) {
    state.count++
  },
  incrementBy (state, n) {
    state.count += n
    console.log(n)
  }
}
