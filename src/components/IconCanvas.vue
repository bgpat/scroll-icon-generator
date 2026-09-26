<template>
  <div class="imgbox" :style="`width:${width + 2}px;height:${height + 2}px`">
    <div v-show="gif == null && !pause">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <canvas
            slot="activator"
            ref="canvas"
            :width="width"
            :height="height"
            v-on="on"
          ></canvas>
        </template>
        <span>HTML5 Canvas + JavaScript</span>
      </v-tooltip>
    </div>
    <div v-if="gif">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <img slot="activator" :src="gifURL" :class="[pause]" v-on="on" />
        </template>
        <span>Animation GIF</span>
      </v-tooltip>
    </div>
    <transition name="circular">
      <v-progress-circular
        v-show="pause"
        class="circular"
        indeterminate
        color="primary"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import GIF from 'gif.js';
import '!!file-loader?name=gif.worker.js!gif.js/dist/gif.worker';

export default {
  data() {
    return {
      scroll: null,
      prev: null,
      pause: false,
      snackbar: false,
      fileSize: '',
    };
  },
  computed: {
    text() {
      return this.$route.params.text + this.spacer;
    },
    context() {
      return this.$refs.canvas.getContext('2d');
    },
    x() {
      return this.position.x - this.scroll;
    },
    y() {
      return this.position.y + this.height * 0.5;
    },
    fontText() {
      return [
        this.font.style,
        this.font.weight,
        this.font.size + 'px',
        `"${this.font.family}"`,
      ].join(' ');
    },
    ...mapState([
      'gif',
      'speed',
      'fps',
      'width',
      'height',
      'spacer',
      'background',
      'transparent',
      'font',
      'outline',
      'position',
    ]),
    ...mapGetters(['gifURL']),
  },
  methods: {
    clear() {
      let ctx = this.context;
      if (this.transparent) {
        ctx.clearRect(0, 0, this.width, this.height);
      } else {
        ctx.fillStyle = this.background;
        ctx.fillRect(0, 0, this.width, this.height);
      }
    },
    size() {
      let metrics = this.context.measureText(this.text);
      return metrics.width;
    },
    update() {
      this.clear();
      let ctx = this.context;
      ctx.font = this.fontText;
      ctx.textBaseline = 'middle';
      ctx.strokeStyle = this.outline.color;
      ctx.lineWidth = this.outline.width;
      ctx.fillStyle = this.font.color;
      ctx.lineJoin = 'round';
      let txt = this.text;
      for (let i = 0; i < this.width / this.size(); i++) {
        txt += this.text;
      }
      this.outline.width && ctx.strokeText(txt, this.x, this.y);
      ctx.fillText(txt, this.x, this.y);
    },
    animate(timestamp) {
      if (this.pause) {
        return;
      }
      let t = (timestamp - (this.prev || 0)) * 0.001;
      if (t * this.fps > 1) {
        if (
          this.scroll == null ||
          (this.scroll += t * this.speed) > this.size()
        ) {
          this.scroll = 0;
        }
        this.update();
        this.prev = timestamp;
      }
      window.requestAnimationFrame(this.animate.bind(this));
    },
    save() {
      this.pause = true;
      let bg = parseInt(
        this.background.replace(
          /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i,
          'ff$3$2$1',
        ),
        16,
      );
      let gif = new GIF({
        width: this.width,
        height: this.height,
        transparent: this.transparent ? bg & 0xffffff : null,
      });
      this.scroll = 0;
      for (
        this.scroll = 0;
        this.scroll < this.size();
        this.scroll += this.speed / this.fps
      ) {
        this.update();
        if (this.transparent) {
          let img = this.context.getImageData(0, 0, this.width, this.height);
          let data = new Uint32Array(img.data.buffer);
          for (let i = 0; i < data.length; i++) {
            if (data[i] == 0) {
              data[i] = bg;
            }
          }
          this.context.putImageData(img, 0, 0);
        }
        gif.addFrame(this.context, {
          delay: 1000 / this.fps,
          copy: true,
        });
      }
      gif.on('finished', blob => {
        this.pause = false;
        this.animate();
        this.$store.commit('gif', blob);
      });
      gif.render();
    },
  },
  mounted() {
    this.$store.commit('canvas', this);
    this.animate();
  },
};
</script>

<style scoped>
.imgbox {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: #fff;
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  background-repeat: repeat;
  background-image: linear-gradient(
      45deg,
      #ccc 25%,
      transparent 25%,
      transparent 75%,
      #ccc 75%
    ),
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%);
}

.circular {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.circular-enter-active {
  transition: opacity 0.5s;
}

.circular-reave-active {
  transition: opacity 3s;
}

.circular-enter,
.circular-leave-to {
  opacity: 0;
}

.pause {
  opacity: 0.3;
}
</style>
