<template>
  <h1 class="tac">Bienvenid@ a mi Portfolio!!</h1>

  <h2>Repositorios en Github</h2>
  <div class="row repos m-negative-row">
    <div
      v-for="repo in getRepos"
      :key="repo.id"
      class="col xs-12 sm-6 md-4 lg-4">
      <div class="repos__item">
        <a
          :href="repo.html_url"
          target="_blank"
          class="repos-title">
          <i class="icon icon-folder-open-empty" /> {{ repo.name }}
        </a>
        <div class="repos-description">{{ repo.description }}</div>
        <div class="repos-language">
          <span class="repos-language__circle" :style="`background: var(${technologyColors[repo.language]})`"></span> {{ repo.language }}
          <i class="icon icon-star-empty" />{{ repo.stargazers_count }}
          <span v-if="repo.forks">
            <i class="icon icon-fork" />{{ repo.forks }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <h2 class="mt75">Skills</h2>
  <ul class="skills">
    <li
      v-for="skill in getSkills"
      :key="skill"
      :style="`background: var(${skill.color})`">
      {{ skill.name }}
    </li>
  </ul>

  <h2 class="mt75">Experiencia</h2>

  <h2 class="mt75">Proyectos</h2>
  <ul class="projects">
    <li>
      <a href="#">Compress Images JS</a>
      <br>Comprime imágenes y está desarrollado con JavaScript
    </li>
  </ul>
</template>

<script>
import { onBeforeMount, computed, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup () {
    // Store
    // ------------------------------
    const store = useStore()

    // Properties
    // ------------------------------
    const technologyColors = reactive({
      CSS: '--violet-color',
      HTML: '--red-color',
      JavaScript: '--yellow-color',
      Vue: '--green-color'
    })

    // Life Cycle
    // ------------------------------
    onBeforeMount(() => {
      initRepos('Mathiew82')
    })

    // Computed
    // ------------------------------
    const getRepos = computed(() => store.getters.getRepos)
    const getColors = computed(() => store.getters.getColors)
    const getSkills = computed(() => store.getters.getSkills)

    // Methods
    // ------------------------------
    const initRepos = (username) => {
      store.dispatch('initRepos', username)
    }

    // Return
    // ------------------------------
    return {
      technologyColors,
      getRepos,
      getColors,
      getSkills
    }
  }
}
</script>
