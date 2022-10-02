import Vue from "vue";
import App from "./App.vue";
import router from "@/plugins/vue-router";
import pinia from "@/plugins/pinia";
import "@/plugins/msw";
import "@/plugins/axios";
import "normalize.css";
import DefaultLayout from "@/layouts/DefaultLayout";

Vue.component("default-layout", DefaultLayout);
Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
