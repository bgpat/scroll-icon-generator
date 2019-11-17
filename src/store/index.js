import Vue from 'vue';
import Vuex from 'vuex';

import font from './font';
import outline from './outline';
import position from './position';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    font,
    outline,
    position,
  },
  state: {
    gif: null,
    speed: 24, // px/sec
    fps: 12,
    width: 32,
    height: 32,
    spacer: '  ',
    background: '#FF00FF',
    transparent: true,
    canvas: null,
    drawer: null,
  },
  getters: {
    isMobile(state) {
      return state.drawer && state.drawer.isMobile;
    },
    isDrawerOpened(state) {
      return state.drawer && state.drawer.opened;
    },
    gifURL(state) {
      if (state.gif == null) {
        return null;
      }
      return window.URL.createObjectURL(state.gif);
    },
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
    drawer(state, v) {
      state.drawer = v;
    },
  },
  actions: {
    generateGIF() {
      this.state.canvas.save();
    },
    toggleDrawer() {
      this.state.drawer.opened ^= true;
    },
  },
});
