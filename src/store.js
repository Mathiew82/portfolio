import { createStore, createLogger } from "vuex";
import dataFaker from "./dataFaker";

export const store = createStore({
  // State
  // ------------------------------
  state() {
    return {
      navbar: [
        {
          id: "skills",
          name: "Skills",
        },
        {
          id: "experience",
          name: "Experiencia",
        },
        {
          id: "projects",
          name: "Proyectos",
        },
        {
          id: "repos",
          name: "Repositorios",
        },
        {
          id: "contact",
          name: "Contacto",
        },
      ],
      repos: [],
      colors: [
        "--green-color",
        "--blue-color",
        "--violet-color",
        "--light-violet-color",
        "--meat-color",
        "--red-color",
        "--yellow-color",
      ],
      skills: [
        {
          name: "HTML",
          color: "--red-color",
        },
        {
          name: "CSS",
          color: "--blue-color",
        },
        {
          name: "SASS",
          color: "--light-violet-color",
        },
        {
          name: "Responsive Design",
          color: "--red-color",
        },
        {
          name: "JavaScript",
          color: "--yellow-color",
        },
        {
          name: "TypeScript",
          color: "--violet-color",
        },
        {
          name: "Vue.js",
          color: "--green-color",
        },
        {
          name: "Node.js",
          color: "--green-color",
        },
        {
          name: "Element.io",
          color: "--blue-color",
        },
        {
          name: "Quasar",
          color: "--violet-color",
        },
        {
          name: "Vuetify",
          color: "--blue-color",
        },
        {
          name: "Bootstrap",
          color: "--violet-color",
        },
        {
          name: "Bulma",
          color: "--green-color",
        },
        {
          name: "POO",
          color: "--red-color",
        },
        {
          name: "Ajax",
          color: "--yellow-color",
        },
        {
          name: "PHP",
          color: "--violet-color",
        },
        {
          name: "MongoDB",
          color: "--green-color",
        },
        {
          name: "MySQL",
          color: "--blue-color",
        },
        {
          name: "Redux",
          color: "--light-violet-color",
        },
        {
          name: "Vuex",
          color: "--green-color",
        },
        {
          name: "Git",
          color: "--red-color",
        },
        {
          name: "Electron",
          color: "--light-violet-color",
        },
        {
          name: "Ionic",
          color: "--blue-color",
        },
      ],
      experience: [
        {
          image: "logo_housfy-min.jpg",
          companyName: "Housfy",
          position: "Front-End Developer",
          dates: "dic. 2020 - actualidad",
          description: `Tecnologías: HTML5, CSS3, SASS, JavaScript, Vue.js, Nuxt.js, Jest, GIT.`,
        },
        {
          image: "logo_crealogix-min.png",
          companyName: "CREALOGIX Group",
          position: "Front-End Developer",
          dates: "jul. 2020 - dic. 2020",
          description: `Tecnologías: HTML5, CSS3, SASS, JavaScript, Angular, Ionic, GIT.`,
        },
        {
          image: "logo_ohmybrand-min.png",
          companyName: "Oh! my brand",
          position: "Front-End Developer",
          dates: "oct. 2018 - jul. 2020",
          description: `Tecnologías: HTML5, CSS3, SASS, JavaScript, Vue.js, Vue StoreFront, Laravel, Elasticsearch, Riot.js, GIT.`,
        },
        {
          image: "logo_pasiona-min.jpg",
          companyName: "Pasiona",
          position: "JavaScript Developer",
          dates: "nov. 2017 - jun. 2018",
          description: `Tecnologías: JavaScript, Phaser, Karma, Scrum, GIT.`,
        },
        {
          image: "logo_proogresa-min.png",
          companyName: "Proogresa",
          position: "Full-Stack Developer",
          dates: "oct. 2016 - nov. 2017",
          description:
            "Tecnologías: HTML5, CSS3, SASS, JavaScript, TypeScript, jQuery, AJAX, Angular, PHP, Twig, CodeIgniter, MySQL, GIT.",
        },
        {
          image: "logo_codiwho-min.png",
          companyName: "Freelance",
          position: "Full-Stack Developer",
          dates: "dic. 2013 - mar. 2015",
          description: `Llevar a cabo el desarrollo de aplicaciones web para pequeños clientes. Trabajando en todas las fases de desarrollo del proyecto, análisis, diseño, implementación, pruebas, y mantenimiento.
            Tecnologías: HTML5, CSS3, SASS, JavaScript, jQuery, AJAX, PHP, CodeIgniter, MySQL, GIT.`,
        },
      ],
      projects: [
        {
          url: "https://compress-images-js.com/",
          name: "Compress Images JS",
          description: "Comprime imágenes y está desarrollado con Vue 2.",
        },
      ],
    };
  },
  // Actions
  // ------------------------------
  actions: {
    async initRepos({ commit }, username) {
      return new Promise((resolve, reject) => {
        fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=asc`
        )
          .then((response) => {
            response.json().then((res) => {
              commit("SET_REPOS", res);
              resolve();
            });
          })
          .catch((error) => {
            console.log(error);

            commit("SET_REPOS", dataFaker);
            resolve();
          });
      });
    },
  },
  // Mutations
  // ------------------------------
  mutations: {
    SET_REPOS(state, repos) {
      state.repos = repos;
    },
  },
  // Getters
  // ------------------------------
  getters: {
    getNavbar(state) {
      return state.navbar;
    },
    getRepos(state) {
      return state.repos.filter((i) => !i.fork && i.id !== 237088223);
    },
    getColors(state) {
      return state.colors;
    },
    getSkills(state) {
      return state.skills;
    },
    getExperience(state) {
      return state.experience;
    },
    getProjects(state) {
      return state.projects;
    },
  },
  // Plugins
  // ------------------------------
  plugins: [createLogger()],
});
