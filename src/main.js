import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import service from "@/request/http";
import { createPinia, PiniaVuePlugin } from "pinia";
import "normalize.css";

Vue.config.productionTip = false;
Vue.prototype.$http = service;

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}
