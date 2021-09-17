<template>
  <div class="header">
    <div class="header__logo" @click="toMainPage()">
        Ритуальные услуги
    </div>
    <div class='header__navs'>
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
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      links: 'header/getLinks'
    })
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
  color: #bbbaba;
}
a {
  text-shadow: 1px 1px 2px black, 0 0 8px #ababab;
  font-family: "Roboto", sans-serif;
  display: flex;
  text-decoration: none;
  filter: brightness(0.9);
  color: indianred;
  font-size: 22px;
  font-weight: 600;
  transition: .5s;
  align-items: center;
  &:hover {
    color: darkgrey;
  }
}
.header {
  height: 120px;
  width: 100%;
  display: flex;
  position: fixed;
  filter: brightness(1.3);
  background: url(../../../assets/images/header_background.jpg) no-repeat fixed 70% 30%;
  box-shadow: 1px 1px 2px 0 grey;
  justify-content: space-between;
  z-index: 1;
  &__navs {
    display: flex;
    flex-direction: row;
    align-self: end;
    gap: 20px;
    margin: 0 5% 10px 0;
  }
  &__logo {
    font-family: "Droid Sans Mono Slashed", sans-serif;
    color: #c0c0c0;
    align-items: center;
    display: flex;
    height: 60px;
    width: 220px;
    padding: 0 4px 4px;
    flex-direction: row;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: .5s;
    &:hover {
      color: #9f5252;
    }
  }
}

</style>
