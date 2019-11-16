<template>
  <MenuGroup name="outline">
      <v-slider
        prepend-icon="format_bold"
        v-model="outlineWidth"
        hint="width"
        thumb-label
        min="0"
        :max="fontSize"
      ></v-slider>
      <v-text-field
        prepend-icon="format_color_text"
        v-model="outlineColor"
        label="color"
        :style="{ color: outlineColor }"
      ></v-text-field>
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
}
</script>
