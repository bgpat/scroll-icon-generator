export default {
  namespaced: true,
  state: {
    width: 2,
    color: '#000000',
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
