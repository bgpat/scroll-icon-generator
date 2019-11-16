<template>
  <MenuGroup name="position">
    <v-slider
      prepend-icon="arrow_back"
      append-icon="arrow_forward"
      v-model="xPosition"
      hint="x offset (px)"
      thumb-label
      :min="-width"
      :max="width"
    />
    <v-slider
      prepend-icon="arrow_upward"
      append-icon="arrow_downward"
      v-model="yPosition"
      hint="y offset (px)"
      thumb-label
      :min="-height"
      :max="height"
    />
  </MenuGroup>
</template>

<script>
import { mapState } from 'vuex'
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
  computed: {
    xPosition: {
      get() {
        return this.$store.state.position.x;
      },
      set(v) {
        this.$store.commit('position/x', v);
      },
    },
    yPosition: {
      get() {
        return this.$store.state.position.y;
      },
      set(v) {
        this.$store.commit('position/y', v);
      },
    },
    ...mapState(['width', 'height']),
  },
}
</script>
