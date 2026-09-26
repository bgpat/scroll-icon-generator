<template>
  <v-navigation-drawer
    v-model="opened"
    persistent
    clipped
    app
    :width="size"
    :mobile-break-point="minWidth"
    ref="drawer"
  >
    <PreviewMenu />
    <AnimationMenu />
    <CanvasMenu />
    <FontMenu />
    <OutlineMenu />
    <PositionMenu />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
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
    minWidth() {
      return this.width + this.size;
    },
    isMobile() {
      return this.$refs.drawer.isMobile;
    },
    ...mapState(['width']),
  },
  data: () => ({
    opened: true,
    size: 320,
  }),
  mounted() {
    this.$store.commit('drawer', this);
  },
};
</script>
