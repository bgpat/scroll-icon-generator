<template>
  <v-navigation-drawer v-model="drawer" persistent clipped app>
    <PreviewMenu />
    <AnimationMenu />
    <CanvasMenu />
    <FontMenu />
    <OutlineMenu />
    <PositionMenu />
  </v-navigation-drawer>
</template>

<script>
import PreviewMenu from './PreviewMenu';
import AnimationMenu from './AnimationMenu';
import CanvasMenu from './CanvasMenu';
import FontMenu from './FontMenu';
import OutlineMenu from './OutlineMenu';
import PositionMenu from './PositionMenu';

export default {
  components: {
    PreviewMenu,
    AnimationMenu,
    CanvasMenu,
    FontMenu,
    OutlineMenu,
    PositionMenu,
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(v) {
        this.$store.commit('drawer', v);
      },
    },
  },
};
</script>
