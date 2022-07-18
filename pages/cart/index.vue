<template>
  <div>
    <div class='main main__container'>Cart</div>
    <span v-for="(item, i) in cartItems" :key='i'>
      {{item.title}} {{item.cost}}руб <span v-if='item.type ==="product"'>{{item.inCart}}шт {{item.itemCommonPrice}}руб </span>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {};
  },
  head() {
    return {
      title: "Р.у. - Корзина"
    };
  },
  computed: {
    ...mapGetters({
      cartItems: 'header/getCartData',
    }),
    // TODO: Доработать корзину
  },
}
</script>

<style lang='scss' scoped>
.main {
  &__container {
    width: 100%;
    height: 100%;
  }
}
</style>
