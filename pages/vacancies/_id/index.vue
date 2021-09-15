<template>
  <div class='main main__container'>
    <div class='container container__title'>
      Вакансия
      {{vacancy.category}}
      {{vacancy.cost}}
      {{vacancy.desc}}
      {{vacancy.title}}
      {{vacancy.id}}
      {{vacancy.imgUrl}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      vacancy: {}
    }
  },
  computed: {
    ...mapGetters({
      items: 'test/getVacancies',
    }),
  },
  mounted() {
    this.getService()
  },
  methods: {
    async getService() {
      this.vacancy = await this.items.find(item => item.id === this.$route.params.id);
    },
  }
}
</script>

<style scoped>

</style>
