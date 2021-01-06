<template>
  <h1>Bienvenido a mi Portfolio</h1>

  <h2>Repositorios Github</h2>
  <div
    v-if="getRepos"
    class="repos">
    <ul>
      <li v-for="repo in getRepos" :key="repo.id">
        <a :href="repo.html_url" target="_blank">
          {{ repo.name }}
        </a>
      </li>
    </ul>
  </div>

  <h2>Mis Skills</h2>
  <ul class="skills">
    <li>HTML</li>
    <li>CSS</li>
    <li>SASS</li>
    <li>Responsive Design</li>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>Vue.js</li>
    <li>Node.js</li>
    <li>MongoDB</li>
    <li>Element.io</li>
    <li>Quasar</li>
    <li>Vuetify</li>
    <li>Bootstrap</li>
    <li>Bulma</li>
    <li>Ajax</li>
    <li>POO</li>
    <li>PHP</li>
    <li>MySQL</li>
    <li>Git</li>
  </ul>
</template>

<script>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup () {
    // Store
    // ------------------------------
    const store = useStore()

    // Life Cycle
    // ------------------------------
    onBeforeMount(() => {
      initRepos('Mathiew82')
    })

    // Computed
    // ------------------------------
    const getRepos = computed(() => store.getters.getRepos)

    // Methods
    // ------------------------------
    const initRepos = (username) => {
      store.dispatch('initRepos', username)
    }

    // Return
    // ------------------------------
    return {
      getRepos
    }
  }
}
</script>
