export default {
  async addToCart({ commit }, data) {
    await commit('addCartData', data);
  },
  async removeFromCart({ commit }, data) {
    await commit('removeCartData', data);
  },
};
