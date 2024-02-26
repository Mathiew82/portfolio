import { ProjectItem } from '@/types/ProjectItem';

export const projectsData: ProjectItem[] = [
  {
    image: 'logo_dailup-min.jpeg',
    url: 'https://dailup.vercel.app/',
    name: 'Dailup',
    stack: 'Vue 3, Pinia, SASS',
    description:
      'Una sencilla aplicación para poder controlar el tiempo de las dailys. Contabiliza el tiempo por turnos.'
  },
  {
    image: 'logo_cijs-min.png',
    url: 'https://compress-images-app.vercel.app/',
    name: 'Compress Images JS',
    stack: 'Vue 2, Vuex, SASS',
    description:
      'Aplicación para la compresión de imágenes. Pueden descargarse individualmente o en un archivo comprimido.'
  },
  {
    image: 'logo_buscamovies-min.png',
    url: 'http://buscamovies.surge.sh/',
    name: 'BuscaMovies',
    stack: 'React, Redux, Jest, TMDb API',
    description:
      'Proyecto de búsqueda de películas alimentado por la api de TMDb. Puedes buscar películas y obtener la información sobre ellas.'
  },
  {
    image: 'logo_multiplication-tables-desktop-min.png',
    url: 'https://mathiew82.github.io/multiplication-tables-desktop/',
    name: 'Tablas de Multiplicar - Desktop App',
    stack: 'JavaScript, Electron, SASS',
    description:
      'Un sencillo juego para que los niños puedan aprender de forma más divertida las tablas de multiplicar.'
  }
];
