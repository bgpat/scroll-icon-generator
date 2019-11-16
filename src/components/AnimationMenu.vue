<template>
  <MenuGroup name="animation">
  <v-slider
    prepend-icon="tune"
    v-model="speed"
    hint="speed (px/sec)"
    thumb-label
    min="0"
    :max="width * 5"
    ></v-slider>
  <v-slider
    prepend-icon="filter"
    v-model="fps"
    hint="FPS"
    thumb-label
    min="1"
    max="100"
    ></v-slider>
  <v-text-field
    prepend-icon="space_bar"
    v-model="spacer"
    label="spacer"
    ></v-text-field>
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
}
</script>
