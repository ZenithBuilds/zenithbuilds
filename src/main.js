import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.js';

const routes = [
  { path: '/', component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


const app = createApp({
  })
app.use(router);

app.mount('#app');