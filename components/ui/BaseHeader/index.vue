<template>
  <div class="header">
    <div class="header__logo" @click="toMainPage()">
        Ритуальные услуги
    </div>
    <div v-for='(item, i) in links' :key='i' class='header__navs'>
      <nuxt-link :to='item.link'>{{ item.title }}
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
  color: indianred;
}
a {
  display: flex;
  text-decoration: none;
  color: grey;
  font-size: 18px;
  font-weight: 500;
  transition: .5s;
  align-items: center;
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
    margin: 0 2% 0 0;
  }
  &__logo {
    color: #414141;
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
      color: #5f5f5f;
    }
  }
}

</style>
