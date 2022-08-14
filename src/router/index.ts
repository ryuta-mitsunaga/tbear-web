import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/access",
    name: "access",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Access.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Menu.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Form.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
