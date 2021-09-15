<template>
  <div class='main main__container'>
    <div class='container container__title'>
      Каталог
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  computed: {
    ...mapGetters({
      items: 'test/getProducts',
    }),
  },
  mounted() {},
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
