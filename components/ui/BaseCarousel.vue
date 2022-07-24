<template>
  <div class="carousel__wrapper" :class="[
    {'carousel__wrapper_mini': mode === 'mini'},
    {'carousel__wrapper_max': mode === 'max'}
    ]">
    <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
      <BaseCarouselItem
        v-for="item in carouselData"
        :key="item.id"
        :item-data="item.attributes"
        :mode="mode"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.id }}</p>
      </BaseCarouselItem>
    </div>
    <div v-if="carouselData.length > 1" class="carousel-btns">
      <button class="carousel-btns__btn" @click="prevSlide">
        Назад
      </button>
      <button class="carousel-btns__btn" @click="nextSlide">
        Вперед
      </button>
    </div>
  </div>
</template>

<script>
import BaseCarouselItem from '@/components/ui/BaseCarouselItem.vue';

export default {
  name: 'CtmCarousel',
  components: { BaseCarouselItem },
  props: {
    mode: {
      type: String,
      default: ''
    },
    carouselData: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  mounted() {
    if (this.interval > 0) {
      const vm = this;
      setInterval(() => {
        vm.nextSlide();
      }, vm.interval);
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) this.currentSlideIndex -= 1;
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carouselData.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex += 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  transition: all ease 3s;
  position: relative;

  &-btns {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;

    &__btn {
      border: none;
      background-color: transparent;
      font-size: 18px;
      transition: .5s;
      color: var(--nav-arr-color);

      &:hover {
        color: var(--nav-arr-color-hov);
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }

  &__wrapper {
    max-width: 700px;
    overflow: hidden;
    &_max {
      max-width: 1072px;
    }
    &_mini {
      max-width: 400px;
    }
  }
}

//@include _767 {
//  .carousel__wrapper {
//    max-width: 500px;
//  }
//}
//
//@include _575 {
//  .carousel__wrapper {
//    max-width: 450px;
//  }
//}
//
//@include _480 {
//  .carousel__wrapper {
//    max-width: 350px;
//  }
//}
//
//@include _380 {
//  .carousel__wrapper {
//    max-width: 300px;
//  }
//}
//
//@include _350 {
//  .carousel__wrapper {
//    max-width: 250px;
//  }
//}
</style>
