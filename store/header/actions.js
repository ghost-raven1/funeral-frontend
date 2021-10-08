export default {
  async addToCart({ commit }, data) {
    await commit('setCartData', data);
  },
};
