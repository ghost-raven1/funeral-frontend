<template>
  <form class="decor">
    <div class="form-inner">
      <h3 class='form-inner__title'>Отклик на вакансию:</h3>
      <div class='form-inner__grid_three'>
        <input type="text" placeholder="Ваша фамилия...">
        <input type="text" placeholder="Ваше имя...">
        <input type="text" placeholder="Ваше отчество...">
      </div>
      <div class='form-inner__grid_two'>
        <input type="text" placeholder="Ваш номер телефона...">
        <input type="email" placeholder="Ваш email...">
      </div>
      <textarea placeholder="Ваше образование..." rows="3"> </textarea>
      <textarea placeholder="Напишите что-нибудь о себе..." rows="3"></textarea>
      <input type="submit" value="Отправить">
    </div>
  </form>
</template>

<script>
export default {
  name: 'VacancyForm',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
body {
  background: #f69a73;
}
.decor {
  position: relative;
  max-width: 700px;
  margin: 50px auto 0;
  background: white;
  border-radius: 30px;
}
.form-inner {
  padding: 50px;
  &__title {
    margin-bottom: 10px;
  }
  &__grid {
    &_two {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    &_three {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
.form-inner input, .form-inner textarea {
  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #E9EFF6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
}
.form-inner input[type="submit"] {
  margin-top: 30px;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}
.form-inner textarea {
  resize: none;
}
.form-inner h3 {
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #707981;
}
</style>
