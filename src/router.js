import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home/Main";
import About from "./components/About/Main";
import CardDetail from "./components/CardDetail/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/detail/:id",
    name: "carddetail",
    component: CardDetail
  }
];

export default new VueRouter({
  routes
});