<template>
  <MenuGroup name="outline">
    <v-slider
      prepend-icon="line_weight"
      v-model="outlineWidth"
      label="weight"
      thumb-label
      min="0"
      :max="fontSize"
    />
    <ColorPicker
      prepend-icon="border_color"
      v-model="outlineColor"
      label="color"
    />
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup.vue';
import ColorPicker from './ColorPicker.vue';

export default {
  components: { MenuGroup, ColorPicker },
  computed: {
    outlineWidth: {
      get() {
        return this.$store.state.outline.width;
      },
      set(v) {
        this.$store.commit('outline/width', v);
      },
    },
    outlineColor: {
      get() {
        return this.$store.state.outline.color;
      },
      set(v) {
        this.$store.commit('outline/color', v);
      },
    },
    fontSize() {
      return this.$store.state.font.size;
    },
  },
};
</script>
