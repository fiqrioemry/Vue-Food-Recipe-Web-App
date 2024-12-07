import Blog from "@/views/Blog.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Recipe from "@/views/Recipe.vue";
import BlogDetails from "@/views/BlogDetails.vue";
import RecipeDetails from "@/views/RecipeDetails.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

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
        path: "/blog/detail/:id",
        name: "BlogDetails",
        component: BlogDetails,
      },
      {
        path: "/recipe/details/:id",
        name: "RecipeDetails",
        component: RecipeDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
