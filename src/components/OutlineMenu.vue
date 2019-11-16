<template>
  <MenuGroup name="outline">
    <v-slider
      prepend-icon="format_bold"
      v-model="outlineWidth"
      hint="width"
      thumb-label
      min="0"
      :max="fontSize"
    />
    <v-text-field
      prepend-icon="format_color_text"
      v-model="outlineColor"
      label="color"
      :style="{ color: outlineColor }"
    />
  </MenuGroup>
</template>

<script>
import { mapState } from 'vuex'
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
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
    ...mapState(['fontSize']),
  },
}
</script>
