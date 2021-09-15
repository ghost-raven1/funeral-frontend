<template>
  <div class='main main__container'>
    <div class='container container__title'>
      Товар
      {{service.category}}
      {{service.cost}}
      {{service.desc}}
      {{service.title}}
      {{service.id}}
      {{service.imgUrl}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      service: {}
    }
  },
  computed: {
    ...mapGetters({
      items: 'test/getServices',
    }),
  },
  mounted() {
    this.getService()
  },
  methods: {
    async getService() {
      this.service = await this.items.find(item => item.id === this.$route.params.id);
      // eslint-disable-next-line no-console
      console.log(this.service);
    },
  }
}
</script>

<style scoped>

</style>
