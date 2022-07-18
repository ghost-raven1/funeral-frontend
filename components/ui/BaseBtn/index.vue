<template>
  <button class="btn" :class="btnClass" :disabled="disabled" @click="$emit('click')">
    <span
      v-if="mode === 'text'"
      class="btn__title"
    >
      {{ title }}
    </span>
    <img
      v-if="mode === 'img'"
      class="btn__img"
      :src="imgLink"
      alt="delete"
    >
  </button>
</template>

<script>
export default {
  name: 'CtmBtn',
  props: {
    imgLink: {
      type: String,
      default: '-'
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    mode: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Название кнопки'
    }
  },
  computed: {
    btnClass () {
      return [
        { btn_disabled: this.disabled }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  border-radius: 6px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  padding: 10px;
  color: #FFFFFF;
  background: #069cea;
  transition: .5s;
  &:hover {
    background: #0083C7;
    cursor: pointer;
  }
  &_disabled {
    background: gray;
    color: #e7dfdf;
  }
  &__title {
    font-family: Source Sans Pro, sans-serif;
  }
  &__img {
    width: 13px;
    height: 16px;
  }
}
</style>
