import path from 'path';
import vue from '@vitejs/plugin-vue';
import 'dotenv/config';

const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './www');
const argvs = require('yargs').argv;
const HOST = process.env.MONACA_SERVER_HOST || argvs.host || '0.0.0.0';

console.log("entro")
export default {
  plugins: [
    vue(),
  ],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
  },
  root: SRC_DIR,
  base: '',
  publicDir: false,
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  server: {
    host: HOST,
    port: 8008,
  }
};