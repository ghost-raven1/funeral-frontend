<template>
  <div class='main main__container'>
    <div class='container container__title'>
      Вакансия
    </div>
    <div class='item item__container'>
      <img v-if="!vacancy.imgUrl" class="item__img" src='~/assets/images/unit.png' :alt='vacancy.title'>
      <img v-if="vacancy.imgUrl" class="item__img" :src='vacancy.imgUrl' :alt='vacancy.title'>
      <div class='item desc'>
        <div class='desc desc__container'>
          <div>
            <div class='desc container__duo'>
              <div class='desc__title'>
                {{vacancy.title}}
              </div>
              <div class='desc__id'>
                Актикул #{{vacancy.id}}
              </div>
              <div class='desc__category'>
                {{vacancy.category}}
              </div>
            </div>
            <div class='desc__desc'>
              {{vacancy.desc}}
            </div>
            <div class='desc__cost'>
              {{vacancy.cost}}₽
            </div>
          </div>
          <div class='btn__container'>
            <button class='desc btn__add'>Добавить в корзину</button>
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
      vacancy: {}
    }
  },
  computed: {
    ...mapGetters({
      items: 'test/getVacancies',
    }),
  },
  mounted() {
    this.getService()
  },
  methods: {
    async getService() {
      this.vacancy = await this.items.find(item => item.id === this.$route.params.id);
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
    color: #414141;
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
    width: 100%;
    object-fit: cover;
    height: 100%;
    border: 1px solid #EFEFEFF9;
    text-align: center;
    border-radius: 6px;
    box-shadow: 2px 0 17px 0 rgba(0,0,0,0.15);
  }
}
</style>
