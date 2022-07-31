import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email, min, digits, confirmed } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Пожалуйста, заполните поле'
})
extend('email', {
  ...email,
  message: 'Невалидный email'
})
extend('min', {
  ...min,
  message: (args) => {
    return `Поле должно содержать не менее ${args.length} символов`
  }
})
extend('digits', {
  ...digits,
  message: (args) => {
    return `Поле должно содержать не менее ${args.length} цифр`
  }
})

extend('phoneNumber', {
  validate (value) {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return {
      valid: regex.test(value)
    }
  },
  message: (args) => {
    return `${args} не заполнен`
  }
})
extend('checked', {
  validate: value => value,
  message: () => {
    return 'Пожалуйста, дайте свое согласие'
  }
})
extend('confirmed', {
  ...confirmed,
  message: (args) => {
    return 'Пароли не совпадают'
  }
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
