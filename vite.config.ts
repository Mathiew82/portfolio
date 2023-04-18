import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  }
};
