import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  timeout: 1000,
  draggable: false
};


Vue.use(Toast, options);
