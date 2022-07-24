<template>
  <div class='catalog catalog__container items'>
    <div
      v-if="tovars.length"
      class='container container__title'
    >
      Товары в корзине {{ tovars.length }} шт.
    </div>
    <div class="items__item">
      <div v-for="(item, i) in tovars" :key="i" class='item item__container'>

        <transition name="fade" mode="out-in" appear>
          <div class="about__common-right">
            <BaseCarousel
              v-if="item.attributes?.images?.data.length"
              :carousel-data="item.attributes?.images?.data"
              mode="mini"
            />
          </div>
        </transition>

        <div class='item desc'>
          <div class='desc desc__container'>
            <div>
              <div class='desc container__duo'>
                <div v-if="item.attributes?.title" class='desc__title'>
                  {{ item.attributes?.title }}
                </div>
                <div class='desc__id'>
                  Кол-во на складе: {{ item.attributes?.count }}
                </div>
                <div
                  v-for="(category, j) in item.attributes?.Kategorii?.data"
                  :key="j"
                  class='desc__category'
                >
                  {{ category.attributes?.Name }}
                </div>
              </div>
              <div
                v-if="item.attributes?.description"
                class='desc__desc'
              >
                {{ item.attributes?.description }}
              </div>
              <div class='desc__cost'>
                {{ item.attributes?.price }}₽
              </div>
            </div>
            <div class='btn__container'>
              <button class='desc btn__add' @click="removeFromCartTovar(i)">
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="tovars.length"
      class='container container__title'
    >
      Услуги в корзине {{ uslugas.length }} шт.
    </div>
    <div class="items__item">
      <div v-for="(item, i) in uslugas" :key="i" class='item item__container'>

        <transition name="fade" mode="out-in" appear>
          <div class="about__common-right">
            <BaseCarousel
              v-if="item.attributes?.images?.data.length"
              :carousel-data="item.attributes?.images?.data"
              mode="mini"
            />
          </div>
        </transition>

        <div class='item desc'>
          <div class='desc desc__container'>
            <div>
              <div class='desc container__duo'>
                <div v-if="item.attributes?.title" class='desc__title'>
                  {{ item.attributes?.name }}
                </div>
                <div
                  v-for="(category, j) in item.attributes?.tipy_uslugs?.data"
                  :key="j"
                  class='desc__category'
                >
                  {{ category.attributes.name }}
                </div>
              </div>
              <div
                v-if="item.attributes?.description"
                class='desc__desc'
              >
                {{ item.attributes?.description }}
              </div>
              <div class='desc__cost'>
                {{ item.attributes?.price }}₽
              </div>
            </div>
            <div class='btn__container'>
              <button class='desc btn__add' @click="removeFromCartUsluga(i)">
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button @click="pushZakaz">
      Оформить заказ
    </button>
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
  head() {
    return {
      title: "Р.у. - Корзина"
    };
  },
  computed: {
    ...mapGetters({
      uslugas: 'header/getUslugas',
      uslugasIds: 'header/getUslugasIds',
      tovars: 'header/getTovars',
      tovarsIds: 'header/getTovarsIds'
    }),
  },
  methods: {
    async pushZakaz() {
      const data = {
        data: {
          Tovars: this.tovarsIds,
          Uslugas: this.uslugasIds,
          // TODO: Добавить форму для заполнения заказа
          // TODO: Доработать фронт
          summa: 2000,
          name: "Alex",
          email: "example@mail.com",
          date: "2022-07-24",
          place: "Томск",
          wish: "Test1111",
        }
      }
      // eslint-disable-next-line no-console
      console.log('data pushZakaz', data)
      await this.$store.dispatch('data/pushZakaz', data)
    },
    removeFromCartTovar(i) {
      this.$store.dispatch('header/deleteTovarFromCart', i)
      this.$store.dispatch('header/deleteTovarIdFromCart', i)
    },
    removeFromCartUsluga(i) {
      this.$store.dispatch('header/deleteUslugaFromCart', i)
      this.$store.dispatch('header/deleteUslugaIdFromCart', i)
    },
  }
}
</script>

<style lang='scss' scoped>
.template {
  overflow: hidden !important;
}
.about__common-right {
  display: flex;
  justify-content: center;
}
.items__item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
  margin-right: 35px;
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
    grid-template-columns: 11fr 2fr;
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
