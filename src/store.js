import { createStore, createLogger } from 'vuex'

export const store = createStore({
  // State
  // ------------------------------
  state () {
    return {
      demo: []
    }
  },
  // Actions
  // ------------------------------
  actions: {
    actionDemo ({ commit }) {
      //
    }
  },
  // Mutations
  // ------------------------------
  mutations: {
    MUTATION_DEMO (state, demo) {
      state.demo = demo
    }
  },
  // Getters
  // ------------------------------
  getters: {
    getDemo (state) {
      return state.demo
    }
  },
  // Plugins
  // ------------------------------
  plugins: [
    createLogger()
  ]
})
