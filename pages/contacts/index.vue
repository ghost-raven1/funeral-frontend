<template>
<div class='main main__container'>
  <div class='container container__title'>
    Контакты
  </div>
  <div v-if="branches.length">
    <div v-for='(item, i) in branches' :key='i' class='grid grid__item'>

      <div v-if="item.attributes?.title" class="grid__item-title">
        {{ item.attributes?.title }}
      </div>

      <iframe
        v-if='mapStatus'
        :src="item.attributes?.map_link"
        class="map"
      />

      <div v-if='item.attributes?.address' class='grid'>
        <a @click='openMap'>
          <div class='item'>
            <div class='item__title'>
              Адрес
            </div>
            <div class='item__info'>
              {{ item.attributes?.address }}
            </div>
          </div>
        </a>
      </div>

      <div v-if='item.attributes?.phone' class='grid'>
        <a :href='"tel:"+item.attributes?.phone'>
          <div class='item'>
            <div class='item__title'>
              Телефон
            </div>
            <div class='item__info'>
              {{ item.attributes?.phone }}
            </div>
          </div>
        </a>
      </div>

      <div v-if='item.attributes?.email' class='grid'>
        <a :href='"mailto:"+item.attributes?.email'>
          <div class='item'>
            <div class='item__title'>
              Почта
            </div>
            <div class='item__info'>
              {{ item.attributes?.email }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <EmptyData v-else description="Филиалы не найдены!"/>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ContactsPage',
  data() {
    return {
      // TODO: Добавить возможность добавления филиалов
      mapStatus: false,
    };
  },
  head() {
    return {
      title: "Р.у. - Контакты"
    };
  },
  computed: {
    ...mapGetters({
      branches: 'data/getBranches'
    })
  },
  mounted() {
    this.$store.dispatch('data/getBranches')
  },
  methods: {
    openMap() {
      this.mapStatus = !this.mapStatus;
    },
  },
}
</script>

<style lang='scss' scoped>
.grid__item {
  &-title {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 600;
    color: #f3f3f3;
    text-shadow: 1px 1px 2px black, 0 0 8px #ababab;
  }
}
.map {
  width: 100%;
  height: 500px;
}
a {
  text-decoration: none;
}
.item {
  border: 1px solid gray;
  background: white;
  border-radius: 6px;
  padding: 10px;
  transition: .5s;
  margin: 10px 0 10px 0;
  transform: scale(0.9);
  &__title {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: black;
  }
  &__info {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #dac03e;
  }
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    box-shadow: 2px 0 17px 0 rgba(225, 225, 225, 0.98);
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
    margin: 10px;
  }
}
.main {
  &__container {
    width: 100%;
    height: 100%;
  }
}
</style>
