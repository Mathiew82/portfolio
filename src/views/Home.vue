<template>
  <welcome
    title="BIENVENID@ A MI PORTFOLIO!!"
    description="Mi nombre es Alberto Mateo, desarrollador Front-End de aplicaciones web." />

  <h2 id="skills-content">
    Skills
  </h2>
  <skills-list :skills="getSkills" />

  <h2
    id="experience-content"
    class="mt75">
    Experiencia
  </h2>
  <experience-list :experience="getExperience" />

  <h2 id="projects-content" class="mt75">Proyectos</h2>
  <projects-list :projects="getProjects" />

  <h2 id="repos-content" class="mt75">Repositorios en Github</h2>
  <repos-list :repos="getRepos" />

  <h2 id="contact-content" class="mt75">Contacta conmigo</h2>
  <contact />
</template>

<script>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import Welcome from '@components/Welcome.vue'
import SkillsList from '@components/SkillsList.vue'
import ExperienceList from '@components/ExperienceList.vue'
import ProjectsList from '@components/ProjectsList.vue'
import ReposList from '@components/ReposList.vue'
import Contact from '@components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    SkillsList,
    ExperienceList,
    ProjectsList,
    ReposList,
    Contact
  },
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
    const getColors = computed(() => store.getters.getColors)
    const getSkills = computed(() => store.getters.getSkills)
    const getExperience = computed(() => store.getters.getExperience)
    const getProjects = computed(() => store.getters.getProjects)
    const getRepos = computed(() => store.getters.getRepos)

    // Methods
    // ------------------------------
    const initRepos = (username) => {
      store.dispatch('initRepos', username)
    }

    // Return
    // ------------------------------
    return {
      getRepos,
      getColors,
      getSkills,
      getExperience,
      getProjects
    }
  }
}
</script>
