import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import service from "@/request/http";

Vue.config.productionTip = false;
Vue.prototype.$http = service;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}
