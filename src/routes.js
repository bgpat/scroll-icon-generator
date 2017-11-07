import Root from './root';
export default [
  {
    path: '/',
    redirect: '/%E6%96%87%E5%AD%97%E3%81%8C%E6%B5%81%E3%82%8C%E3%82%8B%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3',
  },
  {
    path: '/:text',
    component: Root,
  },
];
