import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        capabilities: resolve(__dirname, 'capabilities.html'),
        products: resolve(__dirname, 'products.html'),
        solutions: resolve(__dirname, 'solutions.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
        training: resolve(__dirname, 'training.html'),
        corporate: resolve(__dirname, 'corporate-training.html'),
        college: resolve(__dirname, 'college-training.html'),
      }
    }
  }
});
