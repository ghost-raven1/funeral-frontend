<template>
  <div class='main main__container'>
    <div class="main page">
      <div class='page__body'>
          <div class='container__grid'>
            <div v-for="(item, i) in items" :key='i' class='grid grid__item'>
              <div class='grid item' @click='toItem(item.url)'>
                <img v-if="item.imgUrl" class="item__img" :src='item.imgUrl' :alt='item.title' />
                <img v-if="!item.imgUrl" class="item__img" src='~/assets/images/unit.png' :alt='item.title' />
                <div class='item__title'>
                  {{ item.title }}
                </div>
                <div class='item__category'>
                  {{ item.category }}
                </div>
                <div class='item__desc'>
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainPage',
  data() {
    return {};
  },
  head() {
    return {
      title: "Р.у. - Главная"
    };
  },
  computed: {
    ...mapGetters({
      items: 'test/getCategoriesMainPage',
    }),
  },
  methods: {
    toItem(url) {
      this.$router.push(`/${url}/`);
    },
  },
}
</script>
<style lang="scss" scoped>
.item {
  &:hover {
    cursor: pointer;
  }
  &__img {
    width: 100%;
    height: 250px;
    border-radius: 6px 6px 0 0;
    object-fit: cover;
  }
  &__title {
    font-weight: 500;
    font-size: 16px;
  }
  &__category {
    font-style: oblique;
    font-size: 14px;
  }
  &__desc {
    font-weight: 400;
    font-size: 12px;
    margin: 5px 0;
  }
}
.main {
  &__container {
    width: 100%;
    height: 100%;
  }
}
.page {
  &__container {
    z-index: 0;
    background: url(../assets/images/header_background.jpg) no-repeat fixed 70% 30%;
  }
}
.grid {
  &__item {
    border: 1px solid #EFEFEFF9;
    text-align: center;
    border-radius: 6px;
    transition: .5s;
    background: white;
    opacity:0;
    animation: show 1s .5s;
    animation-fill-mode: forwards;
    &:hover {
      transform: scale(1.01);
      box-shadow: 2px 0 17px 0 rgba(225, 225, 225, 0.98);
    }
  }
}
.container {
  &__title {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #f3f3f3;
    text-shadow: 1px 1px 2px black, 0 0 8px #ababab;
  }
  &__grid {
    margin: 10px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 15px;
  }
}
.main {
  &__container {
    width: 100%;
    height: 100%;
  }
}
</style>
