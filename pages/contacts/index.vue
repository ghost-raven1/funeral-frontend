<template>
<div class='main main__container'>
  <div class='container container__title'>
    Контакты
  </div>
  <div class='container__grid'>
    <div v-for='(item, i) in items' :key='i' class='grid grid__item'>
      <div class='grid item'>
        <div class='item__title'>
          {{ item.title }}
        </div>
        <div class='item__info'>
          <span v-if='item.phone'>
            {{ item.phone }}
          </span>
          <span v-if='item.email'>
            {{ item.email }}
          </span>
          <span v-if='item.address'>
            {{ item.address }}
          </span>
        </div>
      </div>

    </div>
  </div>
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
    color: #414141;
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
