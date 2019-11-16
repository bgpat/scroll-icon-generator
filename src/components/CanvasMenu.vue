<template>
  <MenuGroup name="canvas">
  <v-slider
    prepend-icon="swap_horiz"
    v-model="width"
    hint="width"
    thumb-label
    min="8"
    max="1024"
    ></v-slider>
  <v-slider
    prepend-icon="swap_vert"
    v-model="height"
    hint="height"
    thumb-label
    min="8"
    max="1024"
    ></v-slider>
  <v-text-field
    prepend-icon="format_color_fill"
    v-model="background"
    label="background color"
    :style="{ color: background }"
    ></v-text-field>
  <v-checkbox
    prepend-icon="texture"
    v-model="transparent"
    label="transparent background"
    color="primary"
    ></v-checkbox>
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
}
</script>
