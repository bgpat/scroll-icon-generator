import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import AppRouter from './AppRouter';
import routes from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(AppRouter),
  router: new VueRouter({
    mode: 'history',
    routes,
  }),
}).$mount('#app');
