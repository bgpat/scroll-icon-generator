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
      ></v-slider>
      <v-slider
        prepend-icon="arrow_upward"
        append-icon="arrow_downward"
        v-model="yPosition"
        hint="y offset (px)"
        thumb-label
        :min="-height"
        :max="height"
      ></v-slider>
  </MenuGroup>
</template>

<script>
import MenuGroup from './MenuGroup';

export default {
  components: {MenuGroup},
}
</script>
