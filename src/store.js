import { createStore, createLogger } from 'vuex'

export const store = createStore({
  // State
  // ------------------------------
  state () {
    return {
      repos: []
    }
  },
  // Actions
  // ------------------------------
  actions: {
    async initRepos ({ commit }, username) {
      return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${username}/repos`)
          .then(response => {
            response.json().then(res => {
              commit('SET_REPOS', res)
              resolve()
            })
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  // Mutations
  // ------------------------------
  mutations: {
    SET_REPOS (state, repos) {
      state.repos = repos
    }
  },
  // Getters
  // ------------------------------
  getters: {
    getRepos (state) {
      return state.repos.filter(i => !i.fork).splice(2)
    }
  },
  // Plugins
  // ------------------------------
  plugins: [
    createLogger()
  ]
})
