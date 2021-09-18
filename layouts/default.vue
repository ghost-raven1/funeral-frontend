<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__header">
        <Header />
      </div>
      <div class="template__content">
        <div class="template__container">
          <div class='template margin'>
            <nuxt />
          </div>
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
.margin {
  margin: 0 20px;
}
.primary {
  height: 100vh;
  overflow-y: auto;
  &__template {
    height: 120px;
    display: grid;
    grid-template-rows: 60px 1fr 60px;
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
    background: url(../assets/images/header_background.jpg) no-repeat fixed 70% 30%;
  }
  &__container {
    font-size: 14px;
    width: 100%;
    margin: 60px auto;
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
