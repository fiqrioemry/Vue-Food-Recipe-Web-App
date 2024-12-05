import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Recipe from "@/views/Recipe.vue";
import Details from "@/views/Details.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import Blog from "@/views/Blog.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/recipe",
        name: "Recipe",
        component: Recipe,
      },
      {
        path: "/blog",
        name: "Blog",
        component: Blog,
      },
      {
        path: "/recipe/details/:id",
        name: "Details",
        component: Details,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
