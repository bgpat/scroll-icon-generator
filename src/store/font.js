export default {
  namespaced: true,
  state: {
    family: 'Roboto',
    size: 24, // px
    weight: 400,
    style: 'normal',
    color: '#ffffff',
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
};
