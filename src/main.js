import Vue from "vue";
import App from "./App.vue";
import router from "@/plugins/vue-router";
import pinia from "@/plugins/pinia";
import "@/plugins/msw";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
