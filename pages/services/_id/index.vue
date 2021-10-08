<template>
  <div class='main main__container'>
    <div class='container container__title'>
      Товар
    </div>
    <div class='item item__container'>
      <img v-if="!service.imgUrl" class="item__img" src='~/assets/images/unit.png' :alt='service.title'>
      <img v-if="service.imgUrl" class="item__img" :src='service.imgUrl' :alt='service.title'>
      <div class='item desc'>
        <div class='desc desc__container'>
          <div>
            <div class='desc container__duo'>
              <div class='desc__title'>
                {{service.title}}
              </div>
              <div class='desc__id'>
                Актикул #{{service.id}}
              </div>
              <div class='desc__category'>
                {{service.category}}
              </div>
            </div>
            <div class='desc__desc'>
              {{service.desc}}
            </div>
            <div class='desc__cost'>
              {{service.cost}}₽
            </div>
          </div>
          <div class='btn__container'>
            <button class='desc btn__add' @click="addServiceToCart">
              <span v-if='service.inCart === 0'>Добавить услугу</span>
              <span v-if='service.inCart === 1'>Услуга добавлена</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      service: {}
    }
  },
  computed: {
    ...mapGetters({
      items: 'test/getServices',
    }),
  },
  mounted() {
    this.getService()
  },
  methods: {
    async getService() {
      this.service = await this.items.find(item => item.id === this.$route.params.id);
    },
    async addServiceToCart() {
      await this.$store.dispatch('header/addToCart', this.service);
    },
  }
}
</script>

<style lang='scss' scoped>
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
.main {
  &__container {
    width: 100%;
    height: 100%;
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
    object-fit: cover;
    height: 100%;
    border: 1px solid #EFEFEFF9;
    width: 99%;
    background: white;
    text-align: center;
    border-radius: 6px;
    box-shadow: 2px 0 17px 0 rgba(0,0,0,0.15);
  }
}
</style>
