<template>
  <MenuGroup name="font">
    <v-text-field
      prepend-icon="font_download"
      v-model="fontFamily"
    />
    <v-slider
      prepend-icon="format_size"
      v-model="fontSize"
      hint="size (px)"
      thumb-label
      min="4"
      :max="height * 2"
    />
    <v-slider
      prepend-icon="format_bold"
      v-model="fontWeight"
      hint="weight"
      thumb-label
      min="100"
      max="900"
      step="100"
      snap
    />
    <v-select
      prepend-icon="format_italic"
      v-model="fontStyle"
      hint="style"
      :items="['normal', 'italic', 'oblique']"
    />
    <v-text-field
      prepend-icon="format_color_text"
      v-model="fontColor"
      label="text color"
      :style="{ color: fontColor }"
    />
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
}
</script>
