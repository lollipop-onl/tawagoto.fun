import { NuxtConfig } from '@nuxt/types';
import path from 'path';

const config: NuxtConfig = {
  target: 'static',
  modern: 'client',
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api'],
  build: {
    loaders: {
      scss: {
        sassOptions: {
          includePaths: [path.join(__dirname, 'assets/styles')],
        },
      },
    },
  },
  css: ['reset-css', '@/assets/styles/main.scss'],
  vue: {
    config: {
      productionTips: false,
      devtools: true,
    },
  },
  typescript: {
    typeCheck: {
      typescript: {
        configFile: path.join(__dirname, 'tsconfig.json'),
      },
    },
  },
};

export default config;
