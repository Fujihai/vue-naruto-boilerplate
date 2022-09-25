const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("@/views/HomePage.vue"),
    meta: { view: "homepage" },
  },
  {
    path: "/pinia",
    name: "pinia-usage",
    component: () => import("@/views/PiniaUsage.vue"),
    meta: { view: "pinia" },
  },
];

export default routes;
