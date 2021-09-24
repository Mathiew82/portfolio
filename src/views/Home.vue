<template>
  <Welcome
    image="mi-foto-min.jpeg"
    title="BIENVENID@ A MI PORTFOLIO!!"
    description="Soy Alberto Mateo y me dedico al desarrollo de aplicaciones como Frontend"
  />

  <h2 id="skills-content">Skills</h2>
  <SkillsList />

  <h2 id="experience-content" class="mt75">Experiencia</h2>
  <ExperienceList />

  <h2 id="projects-content" class="mt75">Proyectos</h2>
  <ProjectsList />

  <h2 id="repos-content" class="mt75">Repositorios en Github</h2>
  <ReposList />

  <h2 id="contact-content" class="mt75">Contacta conmigo</h2>
  <Contact />
</template>

<script>
import Welcome from '@components/Welcome.vue'
import SkillsList from '@components/Skills/SkillsList.vue'
import ExperienceList from '@components/Experience/ExperienceList.vue'
import ProjectsList from '@components/Projects/ProjectsList.vue'
import ReposList from '@components/Repos/ReposList.vue'
import Contact from '@components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    SkillsList,
    ExperienceList,
    ProjectsList,
    ReposList,
    Contact,
  },
}
</script>
