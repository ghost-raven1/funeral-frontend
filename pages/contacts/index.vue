<template>
<div class='main main__container'>
  <div class='container container__title'>
    Контакты
  </div>
  <div class='container__grid'>
    <div v-for='(item, i) in items' :key='i' class='grid grid__item'>

      <div v-if='item.phone' class='grid item'>
        <a href=''>
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

      <div v-if='item.email' class='grid item'>
        <a>
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

      <div v-if='item.address' class='grid item'>
        <a>
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
  <Gmap />
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
          address: 'с.Первомайское, ул.Первомайская, 99 кв 99'
        }
      ],
    };
  },
  head() {
    return {
      title: "Р.у. - Контакты"
    };
  },
}
</script>

<style lang='scss' scoped>
.item {
  &:hover {
    cursor: pointer;
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
