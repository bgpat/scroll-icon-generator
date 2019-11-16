import App from './App';
import config from './config';

export default [
  {
    path: '/',
    redirect: `/${encodeURIComponent(config.defaultText)}`,
  },
  {
    path: '/:text',
    component: App,
  },
];
