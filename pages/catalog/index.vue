<template>
<div class='main main__container'>
  <div class='container container__title'>
    Каталог
  </div>
  <div class='container__grid'>
    <div v-for="(item, i) in items" :key='i' class='grid grid__item'>
      <div class='grid item'>
        <img v-if="item.imgUrl" class="item__img" :src='item.imgUrl' :alt='item.title' />
        <img v-if="!item.imgUrl" class="item__img" :src='item.imgUrl' :alt='item.title' />
        <div class='item__title'>
          {{ item.title }}
        </div>
        <div class='item__desc'>
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Catalog',
  data() {
    return {
      items: [
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'https://bipbap.ru/wp-content/uploads/2017/04/1423036688.jpg',
        },
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'http://www.sunhome.ru/i/wallpapers/62/skachat-detskie-kartinki.orig.jpg',
        },
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'http://www.sunhome.ru/i/wallpapers/62/skachat-detskie-kartinki.orig.jpg',
        },
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'http://www.sunhome.ru/i/wallpapers/62/skachat-detskie-kartinki.orig.jpg',
        },
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'http://www.sunhome.ru/i/wallpapers/62/skachat-detskie-kartinki.orig.jpg',
        },
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'http://www.sunhome.ru/i/wallpapers/62/skachat-detskie-kartinki.orig.jpg',
        },
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'http://www.sunhome.ru/i/wallpapers/62/skachat-detskie-kartinki.orig.jpg',
        },
        {
          title: 'Товар 1',
          desc: 'Описание товара 1',
          imgUrl: 'http://www.sunhome.ru/i/wallpapers/62/skachat-detskie-kartinki.orig.jpg',
        }
      ],
    };
  },
}
</script>

<style lang='scss' scoped>
.item {
  &__img {
    width: 100%;
    border-radius: 6px 6px 0 0;
    object-fit: cover;
  }
  &__title {
    font-weight: 500;
    font-size: 16px;
  }
  &__desc {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 5px;
  }
}
.grid {
  &__item {
    border: 1px solid #9d9d9d;
    text-align: center;
    border-radius: 6px;
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
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
  }
}
.main {
  &__constainer {
    width: 100%;
    height: 100%;
  }
}

</style>
