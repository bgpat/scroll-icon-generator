<template>
  <v-app>
    <TopBar />
    <Drawer />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <Canvas />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar';
import Drawer from './components/Drawer';
import Canvas from './components/Canvas';

export default {
  name: 'App',
  components: {
    TopBar,
    Drawer,
    Canvas,
  },
};
</script>
