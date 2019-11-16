import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import Router from './Router';
import routes from './routes';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(Router),
  router: new VueRouter({
    mode: 'history',
    routes,
  }),
}).$mount('#app');
