import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    font: {
      namespaced: true,
      state: {
        family: 'Roboto',
        size: 24,  // px
        weight: 400,
        style: 'normal',
        color: '#000000',
      },
      mutations: {
        family(state, v) {
          this.commit('gif');
          state.family = v;
        },
        size(state, v) {
          this.commit('gif');
          state.size = v;
        },
        weight(state, v) {
          this.commit('gif');
          state.weight = v;
        },
        style(state, v) {
          this.commit('gif');
          state.style = v;
        },
        color(state, v) {
          this.commit('gif');
          state.color = v;
        },
      },
    },
    outline: {
      namespaced: true,
      state: {
        width: 3,
        color: '#ffffff',
      },
      mutations: {
        width(state, v) {
          this.commit('gif');
          state.width = v;
        },
        color(state, v) {
          this.commit('gif');
          state.color = v;
        },
      },
    },
    position: {
      namespaced: true,
      state: {
        x: 0,
        y: 0,
      },
      mutations: {
        x(state, v) {
          state.commit('gif');
          state.x = v;
        },
        y(state, v) {
          state.commit('gif');
          state.y = v;
        },
      },
    },
  },
  state: {
    gif: null,
    speed: 24,  // px/sec
    fps: 12,
    width: 32,
    height: 32,
    spacer: '  ',
    background: '#ff00ff',
    transparent: true,
    canvas: null,
  },
  mutations: {
    gif(state, v) {
      state.gif = v;
    },
    speed(state, v) {
      this.commit('gif');
      state.speed = v;
    },
    fps(state, v) {
      this.commit('gif');
      state.fps = v;
    },
    width(state, v) {
      this.commit('gif');
      state.width = v;
    },
    height(state, v) {
      this.commit('gif');
      state.height = v;
    },
    spacer(state, v) {
      this.commit('gif');
      state.spacer = v;
    },
    background(state, v) {
      this.commit('gif');
      state.background = v;
    },
    transparent(state, v) {
      this.commit('gif');
      state.transparent = v;
    },
    canvas(state, v) {
      state.canvas = v;
    },
  },
  actions: {
    generateGIF(state) {
      this.state.canvas.save();
    },
  },
});
