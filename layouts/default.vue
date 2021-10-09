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
    background: radial-gradient(#787c7c, #1389ad, #059ecc, #60acc2, #787c7c);
    background-size: 400% 400%;
    -webkit-animation: contentAnimation 35s ease-in-out infinite;
    -moz-animation: contentAnimation 35s ease-in-out infinite;
    -o-animation: contentAnimation 35s ease-in-out infinite;
    animation: contentAnimation 35s ease-in-out infinite;
  }
  &__container {
    font-size: 14px;
    width: 100%;
    margin: 60px auto;
  }
  &__header {
    height: 100%;
    background: linear-gradient(79deg, #858585, #2d96b6);
    background-size: 400% 400%;
    -webkit-animation: headerAnimation 55s ease infinite;
    -moz-animation: headerAnimation 55s ease infinite;
    -o-animation: headerAnimation 55s ease infinite;
    animation: headerAnimation 55s ease infinite;
  }
  &__footer {
    height: 100%;
    width: 100%;
  }
}
</style>
