export default {
  addCartData(state, data) {
    const checkId = state.cart.find(item => item.id === data.id);
    if(!checkId) {
      if(data.type === 'product') {
        data.inCart += 1;
        data.itemCommonPrice = data.cost;
        state.cart.push(data);
      } if(data.type === 'service') {
        data.inCart = 1;
        data.itemCommonPrice = data.cost;
        state.cart.push(data);
      }
    } if(checkId) {
      if(data.type === 'product') {
        if (checkId.inStorage > checkId.inCart) {
          checkId.inCart += 1;
          checkId.itemCommonPrice = checkId.cost * checkId.inCart;
        }
      } if(data.type === 'service') {
        checkId.inCart = 1;
      }
    }
  },
  removeCartData(state, data) {
    const checkId = state.cart.find(item => item.id === data.id);
    if(!checkId) {
      if(data.type === 'product') {
        data.inCart = 0;
        data.itemCommonPrice = data.cost;
        state.cart.push(data);
      } if(data.type === 'service') {
        data.inCart = 0;
        data.itemCommonPrice = data.cost;
        state.cart.push(data);
      }
    } if(checkId) {
      if(data.type === 'product') {
        if (checkId.inStorage > checkId.inCart) {
          if (checkId.inCart > 0) {
            checkId.inCart -= 1;
            checkId.itemCommonPrice = checkId.cost * checkId.inCart;
          }
        }
      } if(data.type === 'service') {
        checkId.inCart = 0;
      }
    }
  },
};
