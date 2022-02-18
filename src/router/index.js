import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "presale",
    component: () => import("../views/Presale.vue"),
  },  
  { path: '*', redirect: '/' },
  {
    path: "/withdraw",
    name: "withdraw",
    component: () => import("../views/withdraw.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition)  => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
});

export default router;
