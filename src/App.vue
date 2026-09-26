<template>
  <v-app>
    <TopBar />
    <AppDrawer />
    <v-main>
      <v-container fluid class="fill-height">
        <div class="d-flex justify-center align-center fill-height w-100">
          <IconCanvas />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';
import AppDrawer from './components/AppDrawer.vue';
import IconCanvas from './components/IconCanvas.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    AppDrawer,
    IconCanvas,
  },
};
</script>
