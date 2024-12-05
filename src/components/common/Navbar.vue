<template>
  <header class="py-6 bg-background">
    <div class="flex items-center justify-between container mx-auto">
      <div>
        <h5>FLA<span class="text-accent">VORIZ</span></h5>
      </div>
      <nav>
        <ul class="flex justify-between gap-x-6 font-medium">
          <li v-for="link in links" class="hover:text-accent">
            <router-link
              :to="link.path"
              :key="link.path"
              active-class="text-accent font-bold"
              >{{ link.title }}</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="hidden md:flex space-x-2">
        <Button variant="secondary"
          ><router-link to="/signin">Login</router-link></Button
        >
        <Button><router-link to="/signup">Signup</router-link></Button>
      </div>
    </div>
  </header>
</template>

<script>
import { Button } from "@/components/ui/button";
import { navLinks } from "../../config/index.js";
import { MenuIcon } from "@vue-hero-icons/outline";

export default {
  components: {
    Button,
    MenuIcon,
  },
  data() {
    return {
      links: navLinks,
    };
  },
};
</script>
