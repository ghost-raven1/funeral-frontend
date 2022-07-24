export default {
  deleteUsluga(state, data) {
    state.uslugas.splice(data, 1);
  },
  deleteUslugaId(state, data) {
    state.uslugasIds.splice(data, 1);
  },
  setUslugasIds(state, data) {
    state.uslugasIds = data;
  },
  setUslugas(state, data) {
    state.uslugas = data;
  },
  deleteTovar(state, data) {
    state.tovars.splice(data, 1);
  },
  deleteTovarId(state, data) {
    state.tovarsIds.splice(data, 1);
  },
  setTovarsIds(state, data) {
    state.tovarsIds = data;
  },
  setTovars(state, data) {
    state.tovars = data;
  }
  // addCartData(state, data) {
  //   const checkId = state.cart.find(item => item.id === data.id);
  //   if(!checkId) {
  //     if(data.type === 'product') {
  //       data.inCart += 1;
  //       data.itemCommonPrice = data.cost;
  //       state.cart.push(data);
  //     } if(data.type === 'service') {
  //       data.inCart = 1;
  //       data.itemCommonPrice = data.cost;
  //       state.cart.push(data);
  //     }
  //   } if(checkId) {
  //     if(data.type === 'product') {
  //       if (checkId.inStorage > checkId.inCart) {
  //         checkId.inCart += 1;
  //         checkId.itemCommonPrice = checkId.cost * checkId.inCart;
  //       }
  //     } if(data.type === 'service') {
  //       checkId.inCart = 1;
  //     }
  //   }
  // },
  // removeCartData(state, data) {
  //   const checkId = state.cart.find(item => item.id === data.id);
  //   if(!checkId) {
  //     if(data.type === 'product') {
  //       data.inCart = 0;
  //       data.itemCommonPrice = data.cost;
  //       state.cart.push(data);
  //     } if(data.type === 'service') {
  //       data.inCart = 0;
  //       data.itemCommonPrice = data.cost;
  //       state.cart.push(data);
  //     }
  //   } if(checkId) {
  //     if(data.type === 'product') {
  //       if (checkId.inStorage > checkId.inCart) {
  //         if (checkId.inCart > 0) {
  //           checkId.inCart -= 1;
  //           checkId.itemCommonPrice = checkId.cost * checkId.inCart;
  //         }
  //       }
  //     } if(data.type === 'service') {
  //       checkId.inCart = 0;
  //     }
  //   }
  // },
};
