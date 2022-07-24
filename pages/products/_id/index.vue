<template>
  <div class='catalog catalog__container items'>
    <div class='container container__title'>
      Каталог
    </div>
    <div class="items__item">
      <div class='item item__container'>

        <transition name="fade" mode="out-in" appear>
          <div class="about__common-right">
            <BaseCarousel
              v-if="sliderItems"
              :carousel-data="sliderItems"
            />
          </div>
        </transition>

        <!--      TODO: Доработать добавление в корзину и удаление из нее-->
        <div class='item desc'>
          <div class='desc desc__container'>
            <div>
              <div class='desc container__duo'>
                <div v-if="product.attributes?.title" class='desc__title'>
                  {{ product.attributes?.title }}
                </div>
                <div class='desc__id'>
                  Кол-во на складе: {{ product.attributes?.count }}
                  <!--                TODO: Общая стоимость -->
                  <!--                Общая стоимость: {{product.itemCommonPrice}}₽-->
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
              <div class='desc__cost'>
                {{ product.attributes?.price }}₽
              </div>
            </div>
            <div class='btn__container'>
              <button v-if='inCart > 0' @click='removeProductFromCart'>-</button>
              <button class='desc btn__add' @click="addProductToCart">
                <span v-if='inCart === 0'>Добавить в корзину</span>
                <span v-if='inCart > 0'>В корзине {{product.inCart}}шт.</span>
              </button>
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
      inCart: 0
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
    const { id } = this.$route.params;
    await this.$store.dispatch('data/getProduct', id);
  },
  methods: {
    // TODO: Добавить миксины
    // TODO: Доработать внешний вид страницы
    async addProductToCart() {
      await this.$store.dispatch('header/addToCart', this.product.attributes);
    },
    async removeProductFromCart() {
      await this.$store.dispatch('header/removeFromCart', this.product.attributes);
    },
  }
}
</script>

<style lang='scss' scoped>
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
    justify-content: flex-end;
    padding: 0 10px 10px 0;
  }
  &__add {
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
}
.desc {
  &__container {
    display: grid;
    grid-template-columns: 11fr 1fr;
    margin-top: 20px;
  }
  &__category {
    font-weight: 400;
    font-size: 16px;
    color: #414141;
  }
  &__cost {
    margin-top: 10px;
    font-weight: 600;
    font-size: 18px;
    color: mediumseagreen;
  }
  &__desc {
    margin-top: 10px;
    font-weight: 500;
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
    max-height: 710px;
    width: 700px;
    background: white;
    object-fit: cover;
    height: 100%;
    border: 1px solid #EFEFEFF9;
    text-align: center;
    border-radius: 6px;
    box-shadow: 2px 0 17px 0 rgba(0,0,0,0.15);
  }
}
</style>
