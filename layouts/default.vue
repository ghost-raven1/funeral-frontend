<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__header">
        <Header />
      </div>
      <div class="template__content">
        <div class="template__container">
          <nuxt />
        </div>
      </div>
      <div class="template__footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style lang="scss" scoped>
.primary {
  height: 100vh;
  overflow-y: auto;
  &__template {
    height: 60px;
    display: grid;
    grid-template-rows: 60px 1fr 59px;
  }
}
.template {
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  overflow: auto;
  &__content {
    display: flex;
    width: 100%;
    overflow-y: auto;
    color: black;
    background-color: white;
  }
  &__container {
    font-size: 14px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  &__header {
    height: 100%;
  }
  &__footer {
    height: 100%;
    width: 100%;
  }
}
</style>
