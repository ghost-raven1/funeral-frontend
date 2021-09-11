<template>
<div class='main main__container'>
  <div class='container container__title'>
    Каталог
  </div>
  <div class='container__grid'>
    <div v-for="(item, i) in items" :key='i' class='grid grid__item'>
      <div class='grid item' @click='toItem(item.id)'>
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
        <div class='item__cost'>
          {{ item.cost }}₽
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Catalog',
  data() {
    return {};
  },
  head() {
    return {
      title: "Р.у. - Каталог"
    };
  },
  computed: {
    ...mapGetters({
      items: 'test/getProducts',
    }),
  },
  methods: {
    toItem(id) {
      this.$router.push(`/catalog/${id}`);
    },
  },
}
</script>

<style lang='scss' scoped>
.item {
  &:hover {
    cursor: pointer;
  }
  &__img {
    width: 100%;
    height: 125px;
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
  }
  &__cost {
    font-weight: 400;
    font-size: 12px;
    margin: 5px 0;
  }
}
.grid {
  &__item {
    border: 1px solid #EFEFEFF9;
    text-align: center;
    border-radius: 6px;
    transition: .5s;
    &:hover {
      box-shadow: 2px 0 17px 0 rgba(0,0,0,0.15);
    }
  }
}
.container {
  &__title {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #414141;
  }
  &__grid {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
  }
}
.main {
  &__container {
    width: 100%;
    height: 100%;
  }
}

</style>
