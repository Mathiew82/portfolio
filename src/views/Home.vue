<template>
  <h1 class="tac">Bienvenid@ a mi Portfolio</h1>

  <h2>Repositorios en Github</h2>
  <ul
    v-if="getRepos"
    class="repos">
    <li v-for="repo in getRepos" :key="repo.id">
      <a :href="repo.html_url" target="_blank">
        {{ repo.name }}
      </a>
      <div class="repos_description">{{ repo.description }}</div>
      <div class="repos_language">{{ repo.language }} {{ repo.stargazers_count }}</div>
    </li>
  </ul>

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
