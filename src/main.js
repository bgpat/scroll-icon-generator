import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import AppRouter from './AppRouter.vue';
import router from './router';
import store from './store';

createApp(AppRouter).use(vuetify).use(store).use(router).mount('#app');
