<template>
  <MenuGroup name="canvas">
    <v-slider
      prepend-icon="swap_horiz"
      v-model="width"
      hint="width"
      thumb-label
      min="8"
      max="1024"
    />
    <v-slider
      prepend-icon="swap_vert"
      v-model="height"
      hint="height"
      thumb-label
      min="8"
      max="1024"
    />
    <v-text-field
      prepend-icon="format_color_fill"
      v-model="background"
      label="background color"
      :style="{ color: background }"
    />
    <v-checkbox
      prepend-icon="texture"
      v-model="transparent"
      label="transparent background"
      color="primary"
    />
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
  computed: {
    width: {
      get() {
        return this.$store.state.width;
      },
      set(v) {
        this.$store.commit('width', v);
      },
    },
    height: {
      get() {
        return this.$store.state.height;
      },
      set(v) {
        this.$store.commit('height', v);
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
}
</script>
