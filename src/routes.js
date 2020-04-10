import App from './App';
import config from './config';

export default [
  {
    path: '/',
    redirect(to) {
      if (to.hash !== '') {
        return { path: `/${to.hash.slice(1)}`, hash: '' };
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
