<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__header">
        <BaseHeader />
      </div>
      <div class="template__content">
        <div class="template__container">
          <div class='template margin'>
            <nuxt />
          </div>
        </div>
      </div>
      <div class="template__footer">
        <BaseFooter />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Default',
  computed: {
    ...mapGetters({
      uslugas: 'header/getUslugas',
      tovars: 'header/getTovars',
      products: 'data/getProducts',
      services: 'data/getServices',
      branches: 'data/getBranches',
      common: 'data/getCommon'
    }),
    isOffline () {
      return this.$nuxt.isOffline
    },
  },
  watch: {
    isOffline() {
      this.$toast.warning(`Вы оффлайн, проверьте интернет соединение!`);
    }
  },
  async mounted() {
    await this.checkData()
  },
  methods: {
    async checkData() {
      if (!this.products.length) {
        await setInterval(async () => {
          await this.$store.dispatch('data/getProducts');
        }, 60000)
      }
      if (!this.services.length) {
        await setInterval(async () => {
          await this.$store.dispatch('data/getServices')
        }, 60000)
      }
      if (!this.branches.length) {
        await setInterval(async () => {
          await this.$store.dispatch('data/getBranches')
        }, 60000)
      }
      if (!this.common.length) {
        await setInterval(async () => {
          await this.$store.dispatch('data/getCommon')
        }, 60000)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.margin {
  margin: 0 20px;
}
.primary {
  height: 100vh;
  overflow-y: auto;
  &__template {
    height: 120px;
    display: grid;
    grid-template-rows: 60px 1fr 60px;
  }
}
.template {
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  &__content {
    display: flex;
    width: 100%;
    overflow-y: auto;
    color: black;
    background: radial-gradient(#787c7c, #1389ad, #059ecc, #60acc2, #787c7c);
    background-size: 400% 400%;
  }
  &__container {
    font-size: 14px;
    width: 100%;
    margin: 60px auto;
  }
  &__header {
    height: 100%;
    background: linear-gradient(79deg, #858585, #2d96b6);
    background-size: 400% 400%;
    -webkit-animation: headerAnimation 55s ease infinite;
    -moz-animation: headerAnimation 55s ease infinite;
    -o-animation: headerAnimation 55s ease infinite;
    animation: headerAnimation 55s ease infinite;
  }
  &__footer {
    height: 100%;
    width: 100%;
  }
  @include _767 {
    .header {
      display: flex;
      height: 120px;
      flex-direction: column;
    }
  }
}
</style>
