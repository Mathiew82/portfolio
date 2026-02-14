import type { ProjectItem } from "../types/ProjectItem";

export const projects: ProjectItem[] = [
  {
    image: "logo_cijs-min.png",
    url: "https://compress-images-js.vercel.app/",
    name: "Compress Images JS",
    stack: "Vue, Vuex",
    description:
      "Image compression application. Images can be downloaded individually or in a compressed file.",
  },
  {
    image: "logo_buscamovies-min.webp",
    url: "https://buscamovies.vercel.app/",
    name: "BuscaMovies",
    stack: "React, Redux, Jest, TMDb API",
    description:
      "Movie search project powered by the TMDb API. You can search for movies and get information about them.",
  },
  {
    image: "logo_okivim-min.png",
    url: "https://okivim.org/",
    name: "Okivim - Neovim Configuration",
    stack: "Lua, React, Docusaurus",
    description:
      "Minimal, elegant and efficient Neovim configuration.",
  },
  {
    image: "logo_curripulum-min.webp",
    url: "https://curripulum.vercel.app/",
    name: "Curripulum",
    stack: "React",
    description:
      "Application to easily and practically generate a printable resume with basic information.",
  },
  {
    image: "logo_pass_generator_app-min.png",
    url: "https://github.com/Mathiew82/pass-generator-app",
    name: "Pass Generator App",
    stack: "Rust, GTK 4",
    description:
      "This is a simple password generator app built in Rust with GTK 4.",
  },
  {
    image: "logo_dailup-min.png",
    url: "https://dailup.vercel.app/",
    name: "Dailup",
    stack: "Vue, Pinia",
    description:
      "Application for tracking daily work time. Tracks time by shift.",
  },
  {
    image: "logo_multiplication-tables-desktop-min.png",
    url: "https://mathiew82.github.io/multiplication-tables-desktop/",
    name: "Tablas de Multiplicar - Desktop App",
    stack: "Electron, JavaScript",
    description:
      "A simple game so that children can learn the multiplication tables in a more fun way.",
  },
];
