<template>
  <v-app>
    <TopBar />
    <AppDrawer />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <IconCanvas />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar';
import AppDrawer from './components/AppDrawer';
import IconCanvas from './components/IconCanvas';

export default {
  name: 'App',
  components: {
    TopBar,
    AppDrawer,
    IconCanvas,
  },
};
</script>
