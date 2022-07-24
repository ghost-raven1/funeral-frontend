export default {
  async deleteUslugaIdFromCart({commit}, data) {
    await commit('deleteUslugaId', data);
  },
  async deleteUslugaFromCart({commit}, data) {
    await commit('deleteUsluga', data);
  },
  async addUslugaIdToCart({commit}, data) {
    await commit('setUslugasIds', data);
  },
  async addUslugaToCart({commit}, data) {
    await commit('setUslugas', data);
  },
  async deleteTovarIdFromCart({commit}, data) {
    await commit('deleteTovarId', data);
  },
  async deleteTovarFromCart({commit}, data) {
    await commit('deleteTovar', data);
  },
  async addTovarIdToCart({commit}, data) {
    await commit('setTovarsIds', data);
  },
  async addTovarToCart({commit}, data) {
    await commit('setTovars', data);
  }
};
