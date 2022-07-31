export default {
  async pushZakaz({ commit }, data) {
    try {
      // eslint-disable-next-line no-console
      console.log('data zakaz', data)
      await this.$axios.$post(`/zakazs`, data);
      this.$toast.success(`Заказ успешно оформлен! Ждите звонка оператора!`);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error branches get');
      return false;
    }
  },
  async getBranches({ commit }) {
    try {
      const response = await this.$axios.$get(`/filials?populate=*`);
      commit('setBranches', response);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error branches get');
      return false;
    }
  },
  async getCommon({ commit }) {
    try {
      const response = await this.$axios.$get(`/obshhee?populate=*`);
      commit('setCommon', response);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error common get');
      return false;
    }
  },
  async getProduct({ commit }, id) {
    try {
      const response = await this.$axios.$get(`/tovars/${id}?populate=*`);
      commit('setProduct', response);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error product get');
      return false;
    }
  },
  async getProducts({ commit }) {
    try {
      const response = await this.$axios.$get('/tovars?populate=*');
      commit('setProducts', response);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error products get');
      return false;
    }
  },
  async getService({ commit }, id) {
    try {
      const response = await this.$axios.$get(`/uslugas/${id}?populate=*`);
      commit('setService', response);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error service get');
      return false;
    }
  },
  async getServices({ commit }) {
    try {
      const response = await this.$axios.$get('/uslugas?populate=*');
      commit('setServices', response);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error services get');
      return false;
    }
  },
};
