<template>
  <header class="py-6 bg-background">
    <div class="flex items-center justify-between container mx-auto">
      <div>
        <h5>FLA<span class="text-accent">VORIZ</span></h5>
      </div>
      <nav class="hidden md:block">
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
      <div class="flex md:hidden"><Button @click="openSheet">open</Button></div>
      <div v-if="isOpen" class="{`${}`}">
        <div class="p-4">
          <div class="flex items-center justify-end">
            <Button @click="closeSheet">close</Button>
          </div>
          <div>
            <ul
              class="flex flex-col items-center justify-between gap-y-6 font-medium"
            >
              <li v-for="link in links" class="hover:text-accent">
                <router-link
                  :to="link.path"
                  :key="link.path"
                  @click="closeSheet"
                  active-class="text-accent font-bold"
                  >{{ link.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

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
import { navLinks } from "../../config/index.js";
import { Button } from "@/components/ui/button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      links: navLinks,
      isOpen: false,
    };
  },
  methods: {
    openSheet() {
      this.isOpen = true; // Fungsi untuk membuka sheet
    },
    closeSheet() {
      this.isOpen = false; // Fungsi untuk menutup sheet
    },
  },
};
</script>
