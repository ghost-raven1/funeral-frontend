<template>
  <div class="carousel-item">
    <img
      v-if="imageSlide"
      class="carousel-item__img"
      :src="itemData.url"
      alt=""/>
    <div v-else class="carousel-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtmCarouselItem',
  props: {
    itemData: {
      type: Object,
      default: () => {
      },
    },
    imageSlide: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  &__img {
    width: 700px;
    height: 400px;
    border-radius: 6px;
  }

  &__content {
    max-width: 700px;
    max-height: 400px;
  }
}

//@include _767 {
//  .carousel-item__img {
//    max-width: 500px;
//    max-height: 300px;
//  }
//}
//
//@include _575 {
//  .carousel-item__img {
//    max-width: 450px;
//    max-height: 250px;
//  }
//}
//
//@include _480 {
//  .carousel-item__img {
//    max-width: 350px;
//    max-height: 200px;
//  }
//}
//
//@include _380 {
//  .carousel-item__img {
//    max-width: 300px;
//    max-height: 200px;
//  }
//}
//
//@include _350 {
//  .carousel-item__img {
//    max-width: 250px;
//    max-height: 180px;
//  }
//}
</style>
