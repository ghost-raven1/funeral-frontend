<template>
  <div class="footer">
    <div class='footer__copyrights'>
      Все права защищены. {{ common.attributes?.site_name ? common.attributes?.site_name : 'Центр ритуальных услуг' }}, {{ new Date().getFullYear() }} г.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseFooter',
  computed: {
    ...mapGetters({
      common: 'data/getCommon'
    })
  },
  mounted () {},
  methods: {
    toMainPage (){
      this.$router.push('/')
    },
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  width: 100%;
  display: grid;
  justify-content: center;
  position: fixed;
  background: linear-gradient(79deg, #6c6c6c, #2d96b6);
  background-size: 400% 400%;
  -webkit-animation: headerAnimation 14s ease infinite;
  -moz-animation: headerAnimation 14s ease infinite;
  -o-animation: headerAnimation 14s ease infinite;
  animation: headerAnimation 14s ease infinite;
  z-index: 1;
  &__copyrights {
    width: 100%;
    align-self: center;
    font-weight: 600;
    font-size: 18px;
    color: white;
  }
}

@include _480 {
  .footer {
    &__copyrights {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

</style>
