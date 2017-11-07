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
          state.family = v;
        },
        size(state, v) {
          state.size = v;
        },
        weight(state, v) {
          state.weight = v;
        },
        style(state, v) {
          state.style = v;
        },
        color(state, v) {
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
          state.width = v;
        },
        color(state, v) {
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
          state.x = v;
        },
        y(state, v) {
          state.y = v;
        },
      },
    },
  },
  state: {
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
    speed(state, v) {
      state.speed = v;
    },
    fps(state, v) {
      state.fps = v;
    },
    width(state, v) {
      state.width = v;
    },
    height(state, v) {
      state.height = v;
    },
    spacer(state, v) {
      state.spacer = v;
    },
    background(state, v) {
      state.background = v;
    },
    transparent(state, v) {
      state.transparent = v;
    },
    canvas(state, v) {
      state.canvas = v;
    },
  },
});
