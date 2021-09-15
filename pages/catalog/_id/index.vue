<template>
  <div class='main main__container'>
    <div class='container container__title'>
      Каталог
      {{product.category}}
      {{product.cost}}
      {{product.desc}}
      {{product.title}}
      {{product.id}}
      {{product.imgUrl}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      product: {},
    }
  },
  computed: {
    ...mapGetters({
      items: 'test/getProducts',
    }),
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      this.product = await this.items.find(item => item.id === this.$route.params.id);
      // eslint-disable-next-line no-console
      console.log(this.product);
    },
  }
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
