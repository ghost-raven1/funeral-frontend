<template>
  <transition name='fade' mode='out-in'>
    <div class='catalog catalog__container'>
      <div class='container container__title'>
        Каталог
      </div>
      <div class="container__nav">
        <BaseBtn mode="text" title="Все" :class="{'btn_selected': tab === 'Все' }" @click="tab = 'Все'" />
        <BaseBtn mode="text" title="Товары" :class="{'btn_selected': tab === 'Товары' }" @click="tab = 'Товары'" />
        <BaseBtn mode="text" title="Услуги" :class="{'btn_selected': tab === 'Услуги' }" @click="tab = 'Услуги'" />
      </div>
      <h2 class="nav__title">
          <span>
            Товары
          </span>
        <span v-if="products.length">
            ({{products.length}} шт)
          </span>
      </h2>
      <div v-if="(tab === 'Все' || tab === 'Товары') && products.length" class="nav nav__container">
        <div class='container__grid'>
          <div v-for="(item, i) in products" :key='i' class='grid grid__item'>
            <div class='grid item' @click='toItem(item.id, "товар")'>
              <img
                v-if="item.attributes?.cover.data"
                class="item__img"
                loading="lazy"
                :src='item.attributes?.cover.data?.attributes?.url'
                :alt='item.attributes?.cover.data?.attributes?.name' />
              <img v-else class="item__img" src='~/assets/images/unit.png' :alt='item.attributes?.cover.data?.attributes?.name' />
              <div class='item__title'>
                {{ item.attributes?.title }}
              </div>
              <div
                v-for="(category, j) in item.attributes?.Kategorii?.data"
                :key="j" class='item__category'
              >
                {{ category.attributes?.Name }}
              </div>
              <div class='item__desc'>
                {{ item.attributes?.description }}
              </div>
              <div class='item__cost'>
                {{ item.attributes?.price }}₽
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmptyData v-else description="Товары не найдены!"/>
      <h2 class="nav__title">
          <span>
            Услуги
          </span>
        <span v-if="services.length">
            ({{services.length}} шт)
          </span>
      </h2>
      <div v-if="(tab === 'Все' || tab === 'Услуги') && services.length" class="nav nav__container">
<!--        TODO: Добавить стили исправить верстку -->
        <div class='container__grid'>
          <div v-for="(item, i) in services" :key='i' class='grid grid__item'>
            <div class='grid item' @click='toItem(item.id, "услуги")'>
              <img
                v-if="item.attributes?.cover.data"
                class="item__img"
                loading="lazy"
                :src='item.attributes?.cover.data?.attributes?.url'
                :alt='item.attributes?.cover.data?.attributes?.name' />
              <img v-else class="item__img" src='~/assets/images/unit.png' :alt='item.attributes?.cover.data?.attributes?.name' />
              <div class='item__title'>
                {{ item.attributes?.name }}
              </div>
              <div
                v-for="(category, j) in item.attributes?.tipy_uslugs?.data"
                :key="j" class='item__category'
              >
                {{ category.attributes?.name }}
              </div>
              <div class='item__desc'>
                {{ item.attributes?.description }}
              </div>
              <div class='item__cost'>
                {{ item.attributes?.price }}₽
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmptyData v-else description="Услуги не найдены!"/>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Catalog',
  data() {
    return {
      tab: 'Все'
    };
  },
  head() {
    return {
      title: "Р.у. - Каталог"
    };
  },
  computed: {
    ...mapGetters({
      products: 'data/getProducts',
      services: 'data/getServices'
    }),
  },
  async mounted() {
    await this.$store.dispatch('data/getProducts');
    await this.$store.dispatch('data/getServices')
  },
  methods: {
    // TODO: Добавить миксины
    // TODO: Доработать внешний вид страницы
    toItem(id, type) {
      this.$route.params.type = type;
      this.$router.push(type === 'услуги' ? `/services/${id}` : `/products/${id}`);
    },
  },
}
</script>

<style lang='scss' scoped>
.btn_selected {
  background: $green;
}
.nav {
  &__container {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__title {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #f3f3f3;
  }
}
.catalog {
  &__container {
    width: 100%;
    height: 100%;
  }
}
.container {
  &__title {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #f3f3f3;
  }
  &__nav {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__grid {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
  }
}
.item {
  &:hover {
    cursor: pointer;
  }
  &__img {
    width: 100%;
    border-radius: 6px 6px 0 0;
    object-fit: fill;
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
    background: white;
    opacity:0;
    animation: show 1s .5s;
    animation-fill-mode: forwards;
    &:hover {
      box-shadow: 2px 0 17px 0 rgba(0,0,0,0.15);
      transform: scale(1.01);
    }
  }
}

@include _991 {
  .container__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include _767 {
  .container__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@include _575 {
  .container__grid {
    grid-template-columns: 1fr;
  }
}

</style>
