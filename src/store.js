import { createStore, createLogger } from 'vuex'
import dataFaker from './dataFaker'

export const store = createStore({
  // State
  // ------------------------------
  state () {
    return {
      repos: [],
      colors: [
        '--green-color',
        '--blue-color',
        '--violet-color',
        '--light-violet-color',
        '--meat-color',
        '--red-color',
        '--yellow-color'
      ],
      skills: [
        {
          name: 'HTML',
          color: '--red-color'
        },
        {
          name: 'CSS',
          color: '--blue-color'
        },
        {
          name: 'SASS',
          color: '--light-violet-color'
        },
        {
          name: 'Responsive Design',
          color: '--red-color'
        },
        {
          name: 'JavaScript',
          color: '--yellow-color'
        },
        {
          name: 'TypeScript',
          color: '--violet-color'
        },
        {
          name: 'Vue.js',
          color: '--green-color'
        },
        {
          name: 'Node.js',
          color: '--green-color'
        },
        {
          name: 'Element.io',
          color: '--blue-color'
        },
        {
          name: 'Quasar',
          color: '--violet-color'
        },
        {
          name: 'Vuetify',
          color: '--blue-color'
        },
        {
          name: 'Bootstrap',
          color: '--violet-color'
        },
        {
          name: 'Bulma',
          color: '--green-color'
        },
        {
          name: 'POO',
          color: '--red-color'
        },
        {
          name: 'Ajax',
          color: '--yellow-color'
        },
        {
          name: 'PHP',
          color: '--violet-color'
        },
        {
          name: 'MongoDB',
          color: '--green-color'
        },
        {
          name: 'MySQL',
          color: '--blue-color'
        },
        {
          name: 'Redux',
          color: '--violet-color'
        },
        {
          name: 'Git',
          color: '--red-color'
        }
      ]
    }
  },
  // Actions
  // ------------------------------
  actions: {
    async initRepos ({ commit }, username) {
      return new Promise((resolve, reject) => {
        commit('SET_REPOS', dataFaker)
        resolve()
        // fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=asc`)
        //   .then(response => {
        //     response.json().then(res => {
        //       commit('SET_REPOS', res)
        //       resolve()
        //     })
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
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
      return state.repos.filter(i => !i.fork && i.id !== 237088223)
    },
    getColors (state) {
      return state.colors
    },
    getSkills (state) {
      return state.skills
    }
  },
  // Plugins
  // ------------------------------
  plugins: [
    createLogger()
  ]
})
