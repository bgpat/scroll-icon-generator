<template>
  <v-navigation-drawer v-model="drawer">
    <v-card>
      <v-subheader>preview</v-subheader>
      <v-card-text>
        <v-switch
          :label="gif ? `GIF (${gifSize})` : 'canvas + JS'"
          v-model="gifMode"
        ></v-switch>
      </v-card-text>
    </v-card>
    <v-card>
      <v-subheader>animation</v-subheader>
      <v-card-text>
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
      </v-card-text>
    </v-card>
    <v-card>
      <v-subheader>canvas</v-subheader>
      <v-card-text>
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
      </v-card-text>
    </v-card>
    <v-card>
      <v-subheader>font</v-subheader>
      <v-card-text>
        <v-text-field
          prepend-icon="font_download"
          v-model="fontFamily"
        ></v-text-field>
        <v-slider
          prepend-icon="format_size"
          v-model="fontSize"
          hint="size (px)"
          thumb-label
          min="4"
          :max="height * 2"
        ></v-slider>
        <v-slider
          prepend-icon="format_bold"
          v-model="fontWeight"
          hint="weight"
          thumb-label
          min="100"
          max="900"
          step="100"
          snap
        ></v-slider>
        <v-select
          prepend-icon="format_italic"
          v-model="fontStyle"
          hint="style"
          :items="['normal', 'italic', 'oblique']"
        ></v-select>
        <v-text-field
          prepend-icon="format_color_text"
          v-model="fontColor"
          label="text color"
          :style="{ color: fontColor }"
        ></v-text-field>
      </v-card-text>
    </v-card>
    <v-card>
      <v-subheader>outline</v-subheader>
      <v-card-text>
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
      </v-card-text>
    </v-card>
    <v-card>
      <v-subheader>position</v-subheader>
      <v-card-text>
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
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
