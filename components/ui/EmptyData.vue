<template>
  <div
    class="absence"
  >
    <div class="absence__content">
      <img
        class="absence__img"
        src="~/assets/images/smile_sad.svg"
        alt="empty-icon"
        width="110"
        height="110"
      >
      <div
        v-if="description !== ''"
        class="absence__desc"
      >
        {{ description }}
      </div>
      <button
        v-if="link !== ''"
        class="btn__add"
        @click="toLink"
      >
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyData',
  props: {
    description: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    toLink() {
      this.$router.push(this.link);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  &__add {
    border: none;
    border-radius: 6px;
    background: mediumseagreen;
    color: aliceblue;
    transition: .5s;
    padding: 10px;
    &:hover {
      box-shadow: 2px 3px 6px 0 rgba(0,0,0,0.2);
      background: #1ec466;
      cursor: pointer;
    }
  }
}
.absence {
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
  }
  &__desc {
    color: #e7e7e7;
    font-weight: 600;
  }
}
</style>
