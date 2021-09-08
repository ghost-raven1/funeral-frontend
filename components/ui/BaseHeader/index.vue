<template>
  <div class="header">
    <div class="header__logo">
      <div class="logo" @click="toMainPage()">
        Funeral
      </div>
    </div>
    <div v-for='(item, i) in links' :key='i' class='header__navs'>
      <nuxt-link :to='item.link'>{{item.title}}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      links : [
        {title: 'Каталог', link: '/catalog'},
        {title: 'Корзина', link: '/cart'},
      ],
    }
  },
  computed: {
    ...mapGetters({})
  },
  methods: {
    toMainPage (){
      this.$router.push('/')
    },
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: grey;
  font-size: 18px;
  font-weight: 500;
  transition: .5s;
  &:hover {
    color: darkgrey;
  }
}
.header {
  height: 59px;
  width: 100%;
  display: flex;
  position: fixed;
  background: white;
  box-shadow: 1px 1px 2px 0 grey;
  justify-content: space-between;
  z-index: 1;
  &__navs {
    display: flex;
    flex-direction: row;
    align-self: center;
    margin: 0 10% 0 0;
  }
  &__logo {
    align-items: center;
    align-self: flex-start;
    display: flex;
    height: 60px;
    width: 320px;
    filter: brightness(1);
    padding: 4px;
    flex-direction: row;
  }
}
.logo {
  color: white;
  background: grey;
  border-radius: 6px;
  padding: 5px 10px;
  font-family: montserrat, sans-serif;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  transition: all .15s linear 0s;
  text-shadow: 0 2px 2px -1px grey;
  cursor: pointer;
  &_lgreen {
    @extend .logo;
    padding: 0 5px;
    color: mediumseagreen;
  }
}

</style>
