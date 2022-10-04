const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("@/views/HomePage.vue"),
    meta: { view: "homepage", layout: "default" },
  },
  {
    path: "/pinia",
    name: "pinia-usage",
    component: () => import("@/views/PiniaUsage.vue"),
    meta: { view: "pinia", layout: "default" },
  },
  {
    path: "/axios",
    name: "axios-usage",
    component: () => import("@/views/AxiosUsage.vue"),
    meta: { view: "axios", layout: "default" },
  },
  {
    path: "/mock",
    name: "msw-usage",
    component: () => import("@/views/MswUsage.vue"),
    meta: { view: "msw", layout: "default" },
  },
];

export default routes;
