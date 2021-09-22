import { createStore } from 'vuex'
interface state {
  count: number
}

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: state) {
      state.count++
    }
  }
})

export default store
