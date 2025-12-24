<template>
  <Welcome
    image="mi-foto-min.jpeg"
    title="THIS IS MY PORTFOLIO"
    description="My name is Alberto Mateo and I work in application development as a Frontend developer"
  />

  <h2 id="skills-content">Skills</h2>
  <SkillsList />

  <h2 id="experience-content" class="mt75">Experience</h2>
  <ExperienceList />

  <h2 id="projects-content" class="mt75">Projects</h2>
  <ProjectsList />

  <h2 id="repos-content" class="mt75">Repositories on Github</h2>
  <ReposList />

  <h2 id="contact-content" class="mt75">Contact me</h2>
  <Contact />
</template>

<script setup lang="ts">
import Welcome from '@/components/Welcome.vue';
import SkillsList from '@/components/Skills/SkillList.vue';
import ExperienceList from '@/components/Experience/ExperienceList.vue';
import ProjectsList from '@/components/Projects/ProjectList.vue';
import ReposList from '@/components/Repos/RepoList.vue';
import Contact from '@/components/Contact.vue';
</script>
