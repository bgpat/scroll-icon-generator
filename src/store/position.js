export default {
  namespaced: true,
  state: {
    x: 0,
    y: 0,
  },
  mutations: {
    x(state, v) {
      this.commit('gif');
      state.x = v;
    },
    y(state, v) {
      this.commit('gif');
      state.y = v;
    },
  },
};
