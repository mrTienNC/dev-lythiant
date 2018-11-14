import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Buzz from "./components/buzz/Buzz.vue";
import Profile from "./components/profile/Profile.vue";
import Login from "./components/admin/login/Login.vue";
import Dashboard from "./components/admin/dashboard/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/buzz",
          name: "buzz",
          component: Buzz
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Profile
      // () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/admin",
      name: "admin",
      component: Login,
      children: []
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    }
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: "Dashboard"
    // }
  ]
});
// Router.beforeEach((to, from, next) => {
//   next();
// });
