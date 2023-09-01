import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home/Home.vue";
import AdminPage from "../components/admin/AdminPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "admin",
    path: "/admin",
    component: AdminPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
