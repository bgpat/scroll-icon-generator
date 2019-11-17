<template>
  <MenuGroup name="animation">
    <v-slider
      prepend-icon="speed"
      v-model="speed"
      label="speed"
      thumb-label
      min="0"
      :max="width * 5"
    />
    <v-slider
      prepend-icon="filter"
      v-model="fps"
      label="fps"
      thumb-label
      min="1"
      max="60"
    />
    <v-text-field prepend-icon="space_bar" v-model="spacer" label="spacer" />
  </MenuGroup>
</template>

<script>
import { mapState } from 'vuex';
import MenuGroup from './MenuGroup';

export default {
  components: { MenuGroup },
  computed: {
    speed: {
      get() {
        return this.$store.state.speed;
      },
      set(v) {
        this.$store.commit('speed', v);
      },
    },
    fps: {
      get() {
        return this.$store.state.fps;
      },
      set(v) {
        this.$store.commit('fps', v);
      },
    },
    spacer: {
      get() {
        return this.$store.state.spacer;
      },
      set(v) {
        this.$store.commit('spacer', v);
      },
    },
    ...mapState(['width', 'height']),
  },
};
</script>
