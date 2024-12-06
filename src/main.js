import "@/assets/scss/main.scss";
import error from "./assets/images/error/error.png";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { IMaskDirective } from "vue-imask";
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from "./App.vue";
import router from "./router";
import Vue3Lazyload from "vue3-lazyload";
import Loader from "./components/UI/Loader.vue";
import i18n from "./plugins/i18n";

const app = createApp(App);
app.component("Loader", Loader);
app.directive("mask", IMaskDirective);
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(i18n);
// Подключаем перехватчик обязательно после языка
app.use(Vue3Lazyload, {
  loading: error,
  error: error,
  observer: true,
  observerOptions: {
    rootMargin: "100px",
    threshold: 0.1,
  },
  log: false,
});
app.mount("#app");
