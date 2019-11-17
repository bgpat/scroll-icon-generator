<template>
  <MenuGroup name="preview">
    <v-switch
      prepend-icon="image"
      :label="gif ? `GIF (${gifSize})` : 'Canvas + JavaScript'"
      v-model="gifMode"
      color="primary"
    />
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: { MenuGroup },
  computed: {
    gif: {
      get() {
        return this.$store.state.gif;
      },
      set(v) {
        if (v) {
          return this.$store.dispatch('generateGIF');
        }
        this.$store.commit('gif');
      },
    },
    gifMode: {
      get() {
        return this.gif != null;
      },
      set(v) {
        this.gif = v;
      },
    },
    gifSize() {
      if (this.gif.size > 1000000) {
        return `${(this.gif.size / 1000000).toFixed(1)} MB`;
      } else if (this.gif.size > 1000) {
        return `${(this.gif.size / 1000).toFixed(1)} KB`;
      } else {
        return `${this.gif.size} B`;
      }
    },
  },
};
</script>
