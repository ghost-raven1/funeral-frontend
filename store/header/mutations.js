export default {
  setCartData(state, data) {
    const checkId = state.cart.find(item => item.id === data.id);
    if(!checkId) {
      data.inCart += 1;
      data.itemCommonPrice = data.cost;
      state.cart.push(data);
    } if(checkId) {
      // eslint-disable-next-line no-console
      if (checkId.inStorage > checkId.inCart) {
        checkId.inCart += 1;
        checkId.itemCommonPrice = checkId.cost * checkId.inCart;
        // eslint-disable-next-line no-console
        console.log('+1');
      }
      // eslint-disable-next-line no-console
      console.log('!!!!');
    }
  },
};
