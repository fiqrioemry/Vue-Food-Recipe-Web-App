import Blog from "@/views/Blog.vue";
import Home from "@/views/Home.vue";
import Recipe from "@/views/Recipe.vue";
import BlogDetails from "@/views/BlogDetails.vue";
import RecipeDetails from "@/views/RecipeDetails.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
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
        path: "/recipe",
        name: "recipe",
        component: Recipe,
      },
      {
        path: "/blog",
        name: "blog",
        component: Blog,
      },
      {
        path: "/blog/:slug",
        name: "BlogDetails",
        component: BlogDetails,
      },
      {
        path: "/recipe/:slug",
        name: "RecipeDetails",
        component: RecipeDetails,
      },

      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;

// scrollBehavior(to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition; // Mendukung navigasi kembali (back/forward)
//   }
//   if (to.hash) {
//     return { el: to.hash, behavior: "smooth" }; // Gulir ke elemen dengan id
//   }
//   return { top: 0, behavior: "smooth" }; // Gulir ke atas
// },
