<template>
<div class='main main__container'>
  <div class='container container__title'>
    Контакты
  </div>
  <iframe
    src="https://yandex.ru/map-widget/v1/?um=constructor%3A3df55561aa72afc520e94fd613fb9947fceb680338754e111f400175d5c18f3f&amp;source=constructor"
    class="map"
    frameborder="0"
  />
  <div class='container__grid'>
    <div v-for='(item, i) in items' :key='i' class='grid grid__item'>

      <div v-if='item.phone' class='grid'>
        <a :href='"tel:"+item.phone'>
          <div class='item'>
            <div class='item__title'>
              {{ item.title }}
            </div>
            <div class='item__info'>
              {{ item.phone }}
            </div>
          </div>
        </a>
      </div>

      <div v-if='item.email' class='grid'>
        <a :href='"mailto:"+item.email'>
          <div class='item'>
            <div class='item__title'>
              {{ item.title }}
            </div>
            <div class='item__info'>
              {{ item.email }}
            </div>
          </div>
        </a>
      </div>

      <div v-if='item.address' class='grid'>
        <a @click='openMap'>
          <div class='item'>
            <div class='item__title'>
              {{ item.title }}
            </div>
            <div class='item__info'>
              {{ item.address }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <Gmap v-if='mapStatus'/>
</div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      items: [
        {
          title: 'Телефон',
          phone: '+7-999-990-99-99'
        },
        {
          title: 'Email',
          email: 'example@example.ru'
        },
        {
          title: 'Адрес',
          address: 'с.Первомайское, ул.Рабочая, 1а'
        }
      ],
      mapStatus: false,
    };
  },
  head() {
    return {
      title: "Р.у. - Контакты"
    };
  },
  methods: {
    openMap() {
      this.mapStatus = true;
    },
  },
}
</script>

<style lang='scss' scoped>
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
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
