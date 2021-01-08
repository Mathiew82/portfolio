<template>
  <h1 class="tac">Bienvenid@ a mi Portfolio!!</h1>

  <h2>Skills</h2>
  <ul class="skills">
    <li
      v-for="skill in getSkills"
      :key="skill"
      :style="`background: var(${skill.color})`">
      {{ skill.name }}
    </li>
  </ul>

  <h2 class="mt75">Experiencia</h2>
  <div class="experience">
    <span class="experience-left-content">
      <img src="/logos/logo_housfy.jpg" class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        Housfy <span>Front-End Developer</span>
      </div>
      <div class="experience__date">
        dic. 2020 - actualidad
      </div>
      <div class="experience__description">
        Desarrollo Front-End con VUE.js.
        <p>Tecnologías: HTML5, CSS3, SASS, JS (ECMAScript 6), Vue.js, GIT.</p>
      </div>
    </span>
  </div>
  <div class="experience">
    <span class="experience-left-content">
      <img src="/logos/logo_crealogix.png" class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        CREALOGIX Group <span>Front-End Developer</span>
      </div>
      <div class="experience__date">
        jul. 2020 - jul. 2020
      </div>
      <div class="experience__description">
        Desarrollo Front-End con Angular
        <p>Tecnologías: HTML5, CSS3, SASS, JS (ECMAScript 6), Angular, GIT.</p>
      </div>
    </span>
  </div>
  <div class="experience">
    <span class="experience-left-content">
      <img src="/logos/logo_ohmybrand.png" class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        Oh! my brand <span>Front-End Developer</span>
      </div>
      <div class="experience__date">
        oct. 2018 - jul. 2020
      </div>
      <div class="experience__description">
        Desarrollo Front-End con VUE.js.
        <p>Tecnologías: HTML5, CSS3, SASS, JS (ECMAScript 6), Vue.js, GIT.</p>
      </div>
    </span>
  </div>
  <div class="experience">
    <span class="experience-left-content">
      <img src="/logos/logo_pasiona-min.jpg" class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        Pasiona <span>JavaScript Developer</span>
      </div>
      <div class="experience__date">
        nov. 2017 - jun. 2018
      </div>
      <div class="experience__description">
        Desarrollo de minijuegos virtuales para máquinas tragaperras de una importante empresa del sector.
        <p>Tecnologías: JS (ECMAScript 6), Phaser, Karma, Metodología Scrum, GIT.</p>
      </div>
    </span>
  </div>
  <div class="experience">
    <span class="experience-left-content">
      <img src="/logos/logo_proogresa-min.png" class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        Proogresa <span>Full-Stack Developer</span>
      </div>
      <div class="experience__date">
        oct. 2016 - nov. 2017
      </div>
      <div class="experience__description">
        Tecnologías utilizadas: HTML5, CSS3, SASS, Bootstrap, Foundation, JavaScript, TypeScript, jQuery, AJAX, Angular, PHP, CodeIgniter, MySQL, y GIT.
      </div>
    </span>
  </div>
  <div class="experience">
    <span class="experience-left-content">
      <img src="/logos/logo_codiwho-min.png" class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        Freelance <span>Full-Stack Developer</span>
      </div>
      <div class="experience__date">
        dic. 2013 - mar. 2015
      </div>
      <div class="experience__description">
        Llevar a cabo el desarrollo de aplicaciones web para pequeños clientes. Trabajando en todas las fases de desarrollo del proyecto, análisis, diseño, implementación, pruebas, y mantenimiento.
      </div>
    </span>
  </div>

  <h2 class="mt75">Proyectos</h2>
  <ul class="projects">
    <li>
      <a
        href="https://compress-images-js.com/"
        target="_blank">
        Compress Images JS
      </a>
      <br>Comprime imágenes y está desarrollado con JavaScript
    </li>
  </ul>

  <h2 class="mt75">Repositorios en Github</h2>
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
