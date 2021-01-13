<template>
  <h1 class="tac">
    BIENVENID@ A MI PORTFOLIO!!
  </h1>
  <div class="tac fz22 mb75">
    Mi nombre es Alberto Mateo, desarrollador Front-End de aplicaciones web.
  </div>

  <h2 id="skills-content">
    Skills
  </h2>
  <ul class="skills">
    <li
      v-for="skill in getSkills"
      :key="skill"
      :style="`background: var(${skill.color})`">
      {{ skill.name }}
    </li>
  </ul>

  <h2
    id="experience-content"
    class="mt75">
    Experiencia
  </h2>
  <div
    v-for="item in getExperience"
    :key="item"
    class="experience">
    <span class="experience-left-content">
      <img
        :src="`/logos/${item.image}`"
        class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        {{ item.companyName }} <span>{{ item.position }}</span>
      </div>
      <div class="experience__date">
        {{ item.dates }}
      </div>
      <div class="experience__description">
        {{ item.description }}
      </div>
    </span>
  </div>

  <h2 id="projects-content" class="mt75">Proyectos</h2>
  <ul class="projects">
    <li
      v-for="project in getProjects"
      :key="project">
      <a
        :href="project.url"
        target="_blank">
        {{ project.name }}
      </a>
      <br>{{ project.description }}
    </li>
  </ul>

  <h2 id="repos-content" class="mt75">Repositorios en Github</h2>
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
          <span
            class="repos-language__circle"
            :style="`background: var(${technologyColors[repo.language]})`"></span>
            {{ repo.language }}
          <a
            :href="`${repo.html_url}/stargazers`"
            target="_blank">
            <i class="icon icon-star-empty" />{{ repo.stargazers_count }}
          </a>
          <a
            v-if="repo.forks"
            class="ml4"
            :href="`${repo.html_url}/network/members`"
            target="_blank">
            <i class="icon icon-fork" />{{ repo.forks }}
          </a>
        </div>
      </div>
    </div>
  </div>

  <h2 id="contact-content" class="mt75">Contacta conmigo</h2>
  ¿Quieres contactar conmigo? este es mi correo electrónico es <span class="bold">amateo1982[arroba]yahoo.es</span>
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
    const getExperience = computed(() => store.getters.getExperience)
    const getProjects = computed(() => store.getters.getProjects)

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
      getSkills,
      getExperience,
      getProjects
    }
  }
}
</script>
