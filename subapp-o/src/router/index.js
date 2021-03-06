import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/normal"
  },
  {
    path: "/normal",
    name: "Home",
    component: () => import('../views/Home.vue'),
    // component: Home,
    meta: {
      pageLayout: 1
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      pageLayout: 2
    }
  }
];

export default routes;
