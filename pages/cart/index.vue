<template>
  <div class='catalog catalog__container'>
    <div v-if="tovars.length || uslugas.length" class="items">
      <!--TODO: Добавить пустое состояние корзины -->
      <!--TODO: Сверстать форму для заказа -->
      <!--TODO: Продумать дизайн кнопок -->
      <!--TODO: Заменить все цвета на цвета из палитры vars -->
      <!--TODO: Добавить иконки для кнопок -->
      <!-- TODO: Добавить очистку формы и корзины после оформления заказа -->
      <div style="display: flex; width: 100%; flex-direction: column;">
        <div class='container container__title'>
          Общая стоимость: {{ tovars.length !== 0 || uslugas.length !== 0 ? totalPrice : 0 }}Р
          <button
            class="btn__add"
            :disabled="tovars.length === 0 && uslugas.length === 0"
            @click="isShowCartForm = !isShowCartForm"
          >
            {{ !isShowCartForm ? 'Заполнить форму' : 'Скрыть форму' }}
          </button>
        </div>
        <validation-observer v-if="isShowCartForm" v-slot="{handleSubmit, invalid}" class="form" tag="div">
          <validation-provider v-slot="{ errors }" rules="min:5|required" class="form__field">
            <label for="name" class="form__field-label">
              ФИО
            </label>
            <input
              id="name"
              v-model="name"
              class="form__input"
              placeholder="ФИО"
            />
            <span class="form__field-error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider v-slot="{ errors }" rules="min:5" class="form__field">
            <label for="email" class="form__field-label">
              Email
            </label>
            <input
              id="email"
              v-model="email"
              class="form__input"
              placeholder="Емайл"
            />
            <span class="form__field-error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider v-slot="{ errors }" rules="required|phoneNumber" class="form__field" name="Телефон">
            <label for="phone" class="form__field-label">
              Мобильный телефон
            </label>
            <input
              id="phone"
              v-model="phone"
              class="form__input"
              v-maska="'+7##########'"
              placeholder="+7__________"
            />
            <span class="form__field-error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider v-slot="{ errors }" rules="min:5|required" class="form__field">
            <label for="place" class="form__field-label">
              Адрес
            </label>
            <input
              id="place"
              v-model="place"
              class="form__input"
              placeholder="Адрес"
            />
            <span class="form__field-error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider v-slot="{ errors }" rules="min:5|required" class="form__field">
            <label for="wish" class="form__field-label">
              Комментарий к заказу
            </label>
            <textarea
              id="wish"
              v-model="wish"
              rows="20"
              class="form__input"
              style="resize: none;"
              placeholder="Комментарий к заказу"
            />
            <span class="form__field-error">{{ errors[0] }}</span>
          </validation-provider>
          <button
            class="btn_add"
            :class="{'btn_disabled':invalid}"
            :disabled="invalid"
            @click="handleSubmit(pushZakaz)">
            Оформить заказ
          </button>
        </validation-observer>
      </div>

      <div>
        <div
          v-if="tovars.length"
          class='container container__title'
        >
          Товары в корзине {{ tovars.length }} шт.,
          Стоимость товаров: {{ totalPriceTovar }}Р
          <button class="btn__add" @click="isShowTovar = !isShowTovar">
            {{ !isShowTovar ? 'Посмотреть' : 'Скрыть' }}
          </button>
        </div>
        <div v-if="isShowTovar" class="items__item">
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
                  <div class='btn__container'>
                    <div class='desc__cost'>
                      {{ item.attributes?.price }}₽
                    </div>
                    <button class='desc btn__add' @click="removeFromCartTovar(i)">
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          v-if="uslugas.length"
          class='container container__title'
        >
          Услуги в корзине {{ uslugas.length }} шт.,
          Стоимость услуг: {{ totalPriceUslugas }}Р
          <button class="btn__add" @click="isShowUslugs = !isShowUslugs">
            {{!isShowUslugs ? 'Посмотреть' : 'Скрыть'}}
          </button>
        </div>
        <div v-if="isShowUslugs" class="items__item">
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
                    <div
                      v-if="item.attributes?.name"
                      class='desc__title'
                    >
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
                  <div class='btn__container'>
                    <div class='desc__cost'>
                      {{ item.attributes?.price }}₽
                    </div>
                    <button class='desc btn__add' @click="removeFromCartUsluga(i)">
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EmptyData v-else description="Корзина пуста!" btn-text="Перейти в каталог" link="/catalog"/>
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
      totalPriceTovar: 0,
      totalPriceUslugas: 0,
      isShowTovar: true,
      isShowUslugs: true,
      isShowCartForm: false,
      name: '',
      email: '',
      phone: '',
      place: '',
      wish: '',
    }
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
    totalPrice() {
      return this.totalPriceTovar + this.totalPriceUslugas
    }
  },
  mounted() {
    this.priceTovar()
    this.priceUslugas()
  },
  methods: {
    async pushZakaz() {
      const data = {
        data: {
          Tovars: this.tovarsIds,
          Uslugas: this.uslugasIds,
          summa: this.totalPrice,
          name: this.name,
          email: this.email,
          phone: this.phone,
          place: this.place,
          wish: this.wish,
          date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        }
      }
      await this.$store.dispatch('data/pushZakaz', data)
    },
    priceTovar() {
      for(let i = 0; i < this.tovars.length; i += 1) {
        this.totalPriceTovar += this.tovars[i].attributes?.price
      }
      return this.totalPriceTovar;
    },
    priceUslugas() {
      for(let i = 0; i < this.uslugas.length; i += 1) {
        this.totalPriceUslugas += this.uslugas[i].attributes?.price
      }
      return this.totalPriceUslugas
    },
    removeFromCartTovar(i) {
      this.$store.dispatch('header/deleteTovarFromCart', i)
      this.$store.dispatch('header/deleteTovarIdFromCart', i)
      this.priceTovar()
      this.$toast.success('Товар успешно удален из корзины!');
    },
    removeFromCartUsluga(i) {
      this.$store.dispatch('header/deleteUslugaFromCart', i)
      this.$store.dispatch('header/deleteUslugaIdFromCart', i)
      this.priceUslugas()
      this.$toast.success('Услуга успешно удалена из корзины!');
    },
  }
}
</script>

<style lang='scss' scoped>
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
    padding: 10px 5px;
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
    color: #9a9a9a;
    padding: 10px 5px;
    &:hover {
      border: none;
      border-radius: 6px;
      background: #5b5a5a;
      color: #9a9a9a;
      cursor: default;
    }
  }
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 52px;
}
.form {
  gap: 5px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  &__field {
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    &-label {
      color: $white;
      font-weight: 600;
      margin-bottom: 5px;
    }
    &-error {
      padding-top: 2px;
      color: $white;
    }
  }
  &__input {
    border-radius: 6px;
    border: none;
    padding: 5px;

  }
}
.template {
  overflow: hidden !important;
}
.about__common-right {
  display: flex;
  justify-content: center;
}
.items__item {
  display: grid;
  grid-gap: 35px;
  margin-right: 35px;
  margin-bottom: 50px;
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
  &__add {
    border: none;
    border-radius: 6px;
    background: mediumseagreen;
    color: aliceblue;
    transition: .5s;
    padding: 10px;
    margin: 10px;
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
    grid-template-columns: 1fr;
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
    margin-left: 25px;
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

@include _1400 {
  .form {
    max-width: 500px;
  }
  .items {
    grid-template-columns: 1fr;
    &__item {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include _991 {
  .items {
    grid-template-columns: 1fr;
    &__item {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

@include _480 {
  .form {
    max-width: 90%;
  }
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
