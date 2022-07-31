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
    object-fit: cover;
    &_max {
      width: 1072px;
      //max-height: 700px;
      object-fit: cover;
    }
    &_mini {
      width: 400px;
      //height: 300px;
      object-fit: cover;
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

@include  _1099 {
  .carousel-item__img {
    max-width: 800px;
    object-fit: cover;
  }
}

@include _991 {
  .carousel-item__img {
    max-width: 700px;
    object-fit: cover;
  }
}

@include _767 {
  .carousel-item__img {
    max-width: 600px;
    object-fit: cover;
  }
}

@include _575 {
  .carousel-item__img {
    max-width: 450px;
    object-fit: cover;
  }
}

@include _480 {
  .carousel-item__img {
    max-width: 350px;
    object-fit: cover;
  }
}

@include _380 {
  .carousel-item__img {
    max-width: 300px;
    object-fit: cover;
  }
}

@include _350 {
  .carousel-item__img {
    max-width: 250px;
    object-fit: cover;
  }
}
</style>
