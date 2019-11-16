export default {
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
};
