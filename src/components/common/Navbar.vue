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
              exact-active-class="text-accent font-bold"
              >{{ link.title }}</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="space-x-2">
        <Button variant="secondary">Login</Button>
        <Button>Signup</Button>
      </div>
    </div>
  </header>
</template>

<script>
import { Button } from "@/components/ui/button";
import { navLinks } from "../../config/index.js";
export default {
  components: {
    Button,
  },
  data() {
    return {
      links: navLinks,
    };
  },
};
</script>
