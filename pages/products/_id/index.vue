<template>
  <div class='catalog catalog__container items'>
    <div class='container container__title'>
      Каталог
    </div>
    <div class="items__item">
      <div class='item item__container'>

        <transition name="fade" mode="out-in" appear>
          <div class="about__common-right">
            <SkeletonBlock v-if="!sliderItems" class="skeleton-card__image"/>
            <BaseCarousel
              v-if="sliderItems"
              :carousel-data="sliderItems"
              mode="max"
            />
          </div>
        </transition>

        <div class='item desc'>
          <div class='desc desc__container'>
            <div>
              <div class='desc container__duo'>
                <SkeletonBlock v-if="!product.attributes?.title" />
                <div
                  v-if="product.attributes?.title"
                  class='desc__title'
                >
                  {{ product.attributes?.title }}
                </div>
                <div v-if="product.attributes?.count" class='desc__id'>
                  Кол-во на складе: {{ product.attributes?.count }}
                </div>
                <div
                  v-for="(item, i) in product.attributes?.Kategorii?.data"
                  :key="i"
                  class='desc__category'
                >
                  {{ item.attributes?.Name }}
                </div>
              </div>
              <div
                v-if="product.attributes?.description"
                class='desc__desc'
              >
                {{ product.attributes?.description }}
              </div>
              <div class='btn__container'>
                <div class='desc__cost'>
                  <SkeletonBlock v-if="!product.attributes?.price" />
                  <span v-if="product.attributes?.price">
                    {{ product.attributes?.price }}₽
                  </span>
                </div>
                <button
                  class='desc btn_add'
                  :class="{'btn_disabled': count === product.attributes?.count}"
                  :disabled="count === product.attributes?.count"
                  @click="addTovarInArr(product)"
                >
                  <!-- https://nuxt-seo.frostbutter.com/ -->
                  <!-- TODO: Добавить адаптив к скелетной анимации -->
                  <!-- TODO: Добавить мутацию на товар и услугу после добавления товара в корзину -->
                  <!-- TODO: Добавить error layout https://mavrickmaster.medium.com/custom-error-pages-with-nuxt-js-3c70e6c51aff-->
                <span v-if="count === 0">
                  Добавить в корзину
                </span>
                  <span v-if='count > 0'>
                  В корзине {{ count }} шт.
                </span>
                </button>
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
import BaseCarousel from "@/components/ui/BaseCarousel";


export default {
  name: 'Index',
  components: {
    BaseCarousel
  },
  data() {
    return {
      id: this.$route.params?.id,
      count: 0,
      itemsIdArr: [],
      itemsArr: []
    }
  },
  computed: {
    ...mapGetters({
      product: 'data/getProduct',
    }),
    sliderItems() {
      return this.product.attributes?.images?.data
    }
  },
  async mounted() {
    await this.$store.dispatch('data/getProduct', this.id);
  },
  methods: {
    async addTovarInArr(item) {
      // Добавляем в массив id товаров
      this.itemsIdArr.push({
        __component: "tovar.tovars",
        tovars: [this.id]
      })
      this.count = this.itemsIdArr.length
      const finalItemsIdArr = JSON.parse(JSON.stringify(this.itemsIdArr))
      await this.$store.dispatch('header/addTovarIdToCart', finalItemsIdArr);
      // Добавляем в массив id товаров
      this.itemsArr.push(item)
      const finalItemsArr = JSON.parse(JSON.stringify(this.itemsArr))
      await this.$store.dispatch('header/addTovarToCart', finalItemsArr);
      this.$toast.success(`Товар ${item.attributes?.title} успешно добавлен в корзину!`);
    },
  }
}
</script>

<style lang='scss' scoped>
.skeleton-card__image {
  height: 800px;
  width: 1000px;
}
.about__common-right {
  display: flex;
  justify-content: center;
}
.items__item {
  display: flex;
  justify-content: center;
}
.catalog {
  &__container {
    width: 100%;
    height: 100%;
  }
}
.btn {
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 10px 10px 0;
  }
  &_add {
    border: none;
    border-radius: 6px;
    background: mediumseagreen;
    color: aliceblue;
    transition: .5s;
    &:hover {
      box-shadow: 2px 3px 6px 0 rgba(0,0,0,0.2);
      background: #1ec466;
      cursor: pointer;
    }
  }
  &_disabled {
    border: none;
    border-radius: 6px;
    background: #5b5a5a;
    color: aliceblue;
    transition: .5s;
    &:hover {
      border: none;
      border-radius: 6px;
      background: #5b5a5a;
      color: aliceblue;
      transition: .5s;
      cursor: default;
    }
  }
}
.desc {
  &__container {
    display: grid;
    margin-top: 20px;
  }
  &__category {
    font-weight: 400;
    font-size: 16px;
    color: #414141;
  }
  &__cost {
    margin-top: 10px;
    margin-left: 25px;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 42px;
    text-align: justify;
    color: mediumseagreen;
  }
  &__desc {
    display: grid;
    margin-top: 10px;
    font-weight: 500;
    word-break: break-word;
  }
  &__title {
    font-weight: 600;
    font-size: 16px;
    color: #414141;
  }
  &__id {
    font-weight: 500;
    font-size: 16px;
    color: #414141;
  }
}
.container {
  &__duo {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin-left: 25px;
  }
  &__title {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #f3f3f3;
    text-shadow: 1px 1px 2px black, 0 0 8px #ababab;
  }
}
.item {
  &__img {
    border-radius: 6px 6px 0 0;
    max-height: 550px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__container {
    margin-top: 20px;
    background: white;
    object-fit: cover;
    height: 100%;
    border: 1px solid #EFEFEFF9;
    text-align: center;
    border-radius: 6px;
    box-shadow: 2px 0 17px 0 rgba(0,0,0,0.15);
  }
}
@include _480 {
  .desc__desc {
    padding-left: 10px;
    padding-right: 10px;
  }
  .btn__container {
    display: flex;
    gap: 10px;
  }
}
@include _380 {
  .container__duo {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
