export default {
  setCommon(state, data) {
    state.common = data.data
  },
  setProducts(state, data) {
    state.products = data.data;
  },
  setProduct(state, data) {
    state.product = data.data;
  },
  setService(state, data) {
    state.service = data.data;
  },
  setServices(state, data) {
    state.services = data.data;
    // eslint-disable-next-line no-console
    console.log(data.data)
  },
};
