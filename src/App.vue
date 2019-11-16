<template>
  <v-app>
    <TopBar />
    <Drawer />
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar';
import Drawer from './components/Drawer';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    TopBar,
    Drawer,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
