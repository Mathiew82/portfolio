import { ProjectItem } from '@/types/ProjectItem';

export const projectsData: ProjectItem[] = [
  {
    image: 'logo_curripulum-min.webp',
    url: 'https://curripulum.vercel.app/',
    name: 'Curripulum',
    stack: 'React',
    description:
      'Application to easily and practically generate a printable resume with basic information.'
  },
  {
    image: 'logo_dailup-min.webp',
    url: 'https://dailup.vercel.app/',
    name: 'Dailup',
    stack: 'Vue 3, Pinia',
    description:
      'Application for tracking daily work time. Tracks time by shift.'
  },
  {
    image: 'logo_cijs-min.webp',
    url: 'https://compress-images-js.vercel.app/',
    name: 'Compress Images JS',
    stack: 'Vue 2, Vuex',
    description:
      'Image compression application. Images can be downloaded individually or in a compressed file.'
  },
  {
    image: 'logo_buscamovies-min.webp',
    url: 'https://buscamovies.vercel.app/',
    name: 'BuscaMovies',
    stack: 'React, Redux, Jest, TMDb API',
    description:
      'Movie search project powered by the TMDb API. You can search for movies and get information about them.'
  },
  {
    image: 'logo_multiplication-tables-desktop-min.webp',
    url: 'https://mathiew82.github.io/multiplication-tables-desktop/',
    name: 'Tablas de Multiplicar - Desktop App',
    stack: 'Electron',
    description:
      'A simple game so that children can learn the multiplication tables in a more fun way.'
  }
];
