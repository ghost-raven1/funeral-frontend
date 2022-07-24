<template>
  <div class="carousel-item">
    <img
      v-if="imageSlide"
      class="carousel-item__img"
      :class="[
        {'carousel-item__img_mini': mode === 'mini'},
        {'carousel-item__img_max': mode === 'max'},
        ]"
      :src="itemData.url"
      alt=""/>
    <div
      v-else
      class="carousel-item__content"
      :class="[
        {'carousel-item__content_mini': mode === 'mini'},
        {'carousel-item__content_max': mode === 'max'}
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtmCarouselItem',
  props: {
    mode: {
      type: String,
      default: ''
    },
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
    height: 100%;
    border-radius: 6px;
    &_max {
      width: 1072px;
      height: 600px;
    }
    &_mini {
      width: 400px;
      height: 300px;
    }
  }

  &__content {
    max-width: 700px;
    max-height: 400px;
    &_max {
      width: 1072px;
      height: 600px;
    }
    &_mini {
      width: 400px;
      height: 300px;
    }
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
