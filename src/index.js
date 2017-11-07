import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import store from './store';
import routes from './routes';
import App from './app';

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  components: {
    App,
  },
  template: '<App/>',
  store,
  router: new VueRouter({
    routes,
  }),
});
