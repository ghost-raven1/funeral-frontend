<template>
  <div class="header">
    <div class="header__logo" @click="toMainPage()">
      <img class="header__logo_img" alt="" src='/images/golub1.png'>
      {{ common.attributes?.site_name ? common.attributes?.site_name : 'Центр ритуальных услуг' }}
    </div>
    <div v-if="$route.path !== '/'" class='header__navs'>
      <nuxt-link v-for='(item, i) in links' :key='i' :to='item.link'>{{ item.title }}
        <i v-if="item.icon" class="material-icons">
          {{item.icon}}
        </i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseHeader',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      links: 'header/getLinks',
      common: 'data/getCommon'
    })
  },
  async mounted() {
    await this.$store.dispatch('data/getCommon')
  },
  methods: {
    toMainPage (){
      this.$router.push('/')
    },
  }
}
</script>

<style lang="scss" scoped>
a.nuxt-link-active {
  color: gold;
}
a {
  text-shadow: 1px 1px 2px #015b94, 0 0 30px #ababab;
  font-family: "Roboto", sans-serif;
  display: flex;
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-weight: 600;
  transition: .5s;
  align-items: center;
  opacity:0;
  animation: show 1s .5s;
  animation-fill-mode: forwards;
  &:hover {
    color: gold;
  }
}
.header {
  height: 120px;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  background: linear-gradient(79deg, #858585, #2d96b6);
  background-size: 400% 400%;
  -webkit-animation: headerAnimation 55s ease infinite;
  animation: headerAnimation 55s ease infinite;
  z-index: 1;
  &__navs {
    display: flex;
    flex-direction: row;
    align-self: end;
    gap: 20px;
    transition: .5s;
    margin: 0 5% 20px 0;
  }
  &__logo {
    font-family: "Droid Sans Mono Slashed", sans-serif;
    color: gold;
    text-shadow: 1px 1px 2px #015b94, 0 0 30px #ababab;
    align-items: center;
    display: flex;
    height: 60px;
    width: 100%;
    padding: 0 4px 4px 16px;
    flex-direction: row;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
    transition: .5s;
    &_img {
      width: 60px;
      height: 60px;
      opacity:0;
      animation: show 1s .5s;
      animation-fill-mode: forwards;
    }
    &:hover {
      color: #ffc035;
    }
  }
  @include _991 {
    .header {
      &__navs a {
        font-size: 14px;
      }
    }
  }
  @include _380 {
    .header__logo {
      font-size: 16px;
    }
  }
}

</style>
