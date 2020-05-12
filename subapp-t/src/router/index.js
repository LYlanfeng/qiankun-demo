import Home from "../views/Home.vue";
import AboutT from "../views/AboutT.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: AboutT
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

export default routes;
