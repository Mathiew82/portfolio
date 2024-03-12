import { ProjectItem } from '@/types/ProjectItem';

export const projectsData: ProjectItem[] = [
  {
    image: 'logo_curripulum-min.webp',
    url: 'https://curripulum.vercel.app/',
    name: 'Curripulum',
    stack: 'React',
    description:
      'Aplicación para generar, de forma sencilla y práctica, un currículum para imprimir con información básica.'
  },
  {
    image: 'logo_dailup-min.webp',
    url: 'https://dailup.vercel.app/',
    name: 'Dailup',
    stack: 'Vue 3, Pinia',
    description:
      'Aplicación para controlar el tiempo de las dailys. Contabiliza el tiempo por turnos.'
  },
  {
    image: 'logo_cijs-min.webp',
    url: 'https://compress-images-js.vercel.app/',
    name: 'Compress Images JS',
    stack: 'Vue 2, Vuex',
    description:
      'Aplicación para la compresión de imágenes. Pueden descargarse individualmente o en un archivo comprimido.'
  },
  {
    image: 'logo_buscamovies-min.webp',
    url: 'https://buscamovies.vercel.app/',
    name: 'BuscaMovies',
    stack: 'React, Redux, Jest, TMDb API',
    description:
      'Proyecto de búsqueda de películas alimentado por la api de TMDb. Puedes buscar películas y obtener la información sobre ellas.'
  },
  {
    image: 'logo_multiplication-tables-desktop-min.webp',
    url: 'https://mathiew82.github.io/multiplication-tables-desktop/',
    name: 'Tablas de Multiplicar - Desktop App',
    stack: 'Electron',
    description:
      'Un sencillo juego para que los niños puedan aprender de forma más divertida las tablas de multiplicar.'
  }
];
