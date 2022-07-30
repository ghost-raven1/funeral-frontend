<template>
  <div class="card">
    <BaseBtn v-if="isDelete" class="card__btn" mode="img" @click="deleteCard"/>
    <div class="card__img-wrap">
      <img
        class="card__img"
        :src="cardData.imgUrl"
        :alt="cardData.title"
      >
    </div>
    <div class="card__container">
      <h3 class="card__title">
        {{ cardData.title }}
      </h3>
      <p class="card__desc">
        {{ cardData.desc }}
      </p>
      <div v-if="isDelete" class="card__price">
        {{ cardData.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtmCard',
  props: {
    isDelete: {
      type: Boolean,
      default: false
    },
    fromApi: {
      type: Boolean,
      default: false
    },
    isServices: {
      type: Boolean,
      default: false
    },
    cardData: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    deleteCard () {
      this.$emit('deleteCard', this.cardData)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 423px;
  background-color: #FFFFFF;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;
  transition: .5s;
  &:hover {
    -webkit-box-shadow: 2px 4px 28px 6px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 2px 4px 28px 6px rgba(34, 60, 80, 0.2);
    box-shadow: 2px 4px 28px 6px rgba(34, 60, 80, 0.2);
    transform: scale(1.02);
    .card__btn {
      background-color: #0083C7;
      margin: -22px 309px;
      z-index: 20;
      width: 33px;
      height: 35px;
      transition: .5s;
      opacity: 1;
      position: absolute;
    }
    //@include _480 {
    //  .card__btn {
    //    margin: -12px 250px;
    //  }
    //}
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
    border-radius: 4px 4px 0 0;
    &-wrap {
      width: 100%;
      height: 300px;
    }
  }
  &__btn {
    transition: opacity 1s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
  }
  &__container {
    margin: 16px 16px 0 16px;
  }
  &__title {
    font-family: Source Sans Pro, sans-serif;
    color: black;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }
  &__desc {
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #313131;
    margin-bottom: 32px;
    height: 85px;
    overflow: auto;
  }
  &__price {
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #313131;
  }
}
@include _575 {
  .card {
    height: auto;
    &__title {
      margin-bottom: 3px;
    }
    &__desc {
      height: auto;
      overflow: hidden;
      line-height: inherit;
      padding-bottom: 10px;
    }
  }
}

@include _480 {
  .card__container {
    margin: 5px 16px 0 16px;
  }
}
</style>
