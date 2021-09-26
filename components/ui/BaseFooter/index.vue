<template>
  <div class="footer">
    <div class='footer__copyrights'>Все права защищены. Ритуальные услуги, {{ year }}г.</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      year: '',
    }
  },
  computed: {
    ...mapGetters({})
  },
  mounted () {
    this.getFullYear();
  },
  methods: {
    toMainPage (){
      this.$router.push('/')
    },
    getFullYear() {
      const date = new Date();
      this.year = date.getFullYear();
      return this.year
    }
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
  background: url(../../../assets/images/header_background.jpg) no-repeat fixed 70% 30%;
  z-index: 1;
  &__copyrights {
    width: 100%;
    align-self: center;
    font-weight: 600;
    font-size: 18px;
    color: #2d2d2d;
    text-shadow: 1px 1px 2px white, 0 0 8px #ababab;
  }
}

</style>
