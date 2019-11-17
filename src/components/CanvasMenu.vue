<template>
  <MenuGroup name="canvas">
    <v-slider
      prepend-icon="swap_horiz"
      v-model="width"
      label="width"
      thumb-label
      min="8"
      max="256"
      step="8"
    />
    <v-slider
      prepend-icon="swap_vert"
      v-model="height"
      label="height"
      thumb-label
      min="8"
      max="256"
      step="8"
    />
    <v-switch
      :prepend-icon="lockAspect ? 'lock_outline' : 'lock_open'"
      label="lock aspect ratio"
      v-model="lockAspect"
      color="primary"
    />
    <ColorPicker
      prepend-icon="format_color_fill"
      v-model="background"
      label="background color"
    />
    <v-switch
      prepend-icon="texture"
      v-model="transparent"
      label="transparent background"
      color="primary"
    />
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';
import ColorPicker from './ColorPicker';

export default {
  components: { MenuGroup, ColorPicker },
  computed: {
    width: {
      get() {
        return this.$store.state.width;
      },
      set(v) {
        this.$store.commit('width', v);
        if (this.lockAspect) {
          this.$store.commit('height', v);
        }
      },
    },
    height: {
      get() {
        return this.$store.state.height;
      },
      set(v) {
        this.$store.commit('height', v);
        if (this.lockAspect) {
          this.$store.commit('width', v);
        }
      },
    },
    background: {
      get() {
        return this.$store.state.background;
      },
      set(v) {
        this.$store.commit('background', v);
      },
    },
    transparent: {
      get() {
        return this.$store.state.transparent;
      },
      set(v) {
        this.$store.commit('transparent', v);
      },
    },
  },
  data: () => ({
    lockAspect: true,
  }),
};
</script>
