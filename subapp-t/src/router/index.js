import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutT from "../views/AboutT.vue";
// import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      pageLayout: 1
    }
  },
  {
    path: "/aboutt",
    name: "AboutT",
    component: AboutT,
    meta: {
      pageLayout: 2
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: About
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      pageLayout: 3
    }
  }
];

export default routes;
