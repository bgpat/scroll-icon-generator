import App from './App.vue';
import config from './config.js';

export default [
  {
    path: '/',
    redirect(to) {
      if (/^\/\?/.test(to.fullPath)) {
        return { path: to.fullPath.replace(/^\/\?/, '/'), query: null };
      }
      return `/${encodeURIComponent(config.defaultText)}`;
    },
  },
  {
    path: '/?:text',
    component: App,
  },
  {
    path: '/:text',
    component: App,
  },
];
