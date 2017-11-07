<template>
  <v-app>
    <main>
      <v-navigation-drawer persistent clipped app v-model="drawer">
        <v-form>
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
        </v-form>
      </v-navigation-drawer>
      <v-toolbar
        color="blue darken-3"
        dark
        app
        clipped-left
        fixed
      >
        <v-toolbar-title class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer">
          </v-toolbar-side-icon>
        </v-toolbar-title>
        <v-text-field
          solo
          prepend-icon="mode_edit"
          v-model="text"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon @click="save">
          <v-icon>gif</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
      };
    },
    computed: {
      text: {
        get() {
          return this.$route.params.text;
        },
        set(v) {
          this.$router.push(`/${encodeURIComponent(v)}`);
        },
      },
      speed: {
        get() {
          return this.$store.state.speed;
        },
        set(v) {
          this.$store.commit('speed', v);
        },
      },
      fps: {
        get() {
          return this.$store.state.fps;
        },
        set(v) {
          this.$store.commit('fps', v);
        },
      },
      width: {
        get() {
          return this.$store.state.width;
        },
        set(v) {
          this.$store.commit('width', v);
        },
      },
      height: {
        get() {
          return this.$store.state.height;
        },
        set(v) {
          this.$store.commit('height', v);
        },
      },
      spacer: {
        get() {
          return this.$store.state.spacer;
        },
        set(v) {
          this.$store.commit('spacer', v);
        },
      },
      background: {
        get() {
          return this.$store.state.background;
        },
        set(v) {
          this.$store.commit('background', v);
        },
      },
      transparent: {
        get() {
          return this.$store.state.transparent;
        },
        set(v) {
          this.$store.commit('transparent', v);
        },
      },
      fontFamily: {
        get() {
          return this.$store.state.font.family;
        },
        set(v) {
          this.$store.commit('font/family', v);
        },
      },
      fontSize: {
        get() {
          return this.$store.state.font.size;
        },
        set(v) {
          this.$store.commit('font/size', v);
        },
      },
      fontWeight: {
        get() {
          return this.$store.state.font.weight;
        },
        set(v) {
          this.$store.commit('font/weight', v);
        },
      },
      fontStyle: {
        get() {
          return this.$store.state.font.style;
        },
        set(v) {
          this.$store.commit('font/style', v);
        },
      },
      fontColor: {
        get() {
          return this.$store.state.font.color;
        },
        set(v) {
          this.$store.commit('font/color', v);
        },
      },
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
    },
    methods: {
      save() {
        this.$store.state.canvas.save();
      },
    },
  };
</script>
