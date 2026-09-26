<template>
  <v-navigation-drawer
    v-model="opened"
    clipped
    :width="size"
    :mobile-breakpoint="minWidth"
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
import PreviewMenu from './PreviewMenu.vue';
import AnimationMenu from './AnimationMenu.vue';
import CanvasMenu from './CanvasMenu.vue';
import FontMenu from './FontMenu.vue';
import OutlineMenu from './OutlineMenu.vue';
import PositionMenu from './PositionMenu.vue';

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
      return this.$vuetify.display.width < this.minWidth;
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
