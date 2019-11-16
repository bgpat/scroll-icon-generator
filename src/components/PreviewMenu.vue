<template>
  <MenuGroup name="preview">
      <v-switch
        :label="gif ? `GIF (${gifSize})` : 'canvas + JS'"
        v-model="gifMode"
      ></v-switch>
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
}
</script>
