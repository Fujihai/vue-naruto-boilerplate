import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("../pages/HomePage.vue"),
    meta: { view: "homepage" },
  },
  {
    path: "/pinia",
    name: "pinia-usage",
    component: () => import("../pages/PiniaUsage.vue"),
    meta: { view: "pinia" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
